const router = require( 'express' ).Router();
const sequelize = require( '../config/connection' );
const { Listing, User, Category } = require( '../models' );

// get all Listings for homepage
router.get( '/', ( req, res ) =>
{
    console.log( '======================' );
    Listing.findAll( {
        attributes: [
            'id',
            'title',
            'description',
            'user_id',
            'category_id',
            'listing_date',
            'updated_at'
        ],
        include: [
            {
                model: User,
                attributes: [ 'username', 'name']
            },
            {
                model: Category,
                attributes: [ 'category_name' ]
            },
            // {
            //     model: Tags,
            //     attributes: ['tag_name']
            // }
        ]
    } )
        .then( dbListingData =>
        {
            const listings = dbListingData.map( listing => listing.get( { plain: true } ) );

            res.render( 'homepage', {
                listings,
                loggedIn: req.session.loggedIn
            } );
        } )
        .catch( err =>
        {
            console.log( err );
            res.status( 500 ).json( err );
        } );
} );

// get single listing
router.get( '/listing/:id', ( req, res ) =>
{
    Listing.findOne( {
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'description',
            'user_id',
            'category_id',
            'listing_date',
            'updated_at',
            [ sequelize.literal( '(SELECT COUNT(*) FROM user WHERE listing_id = listing.id)' ), 'posted_by' ]
        ],
        include: [
            {
                model: User,
                attributes: [ 'username', 'name']
            },
            {
                model: Category,
                attributes: [ 'category_name' ]
            },
            // {
            //     model: Tags,
            //     attributes: [ 'tag_name' ]
            // }
        ]
    } )
        .then( dbListingData =>
        {
            if( !dbListingData ) {
                res.status( 404 ).json( { message: 'No listing found with this id' } );
                return;
            }

            const listing = dbListingData.get( { plain: true } );

            res.render( 'single-listing', {
                listing,
                loggedIn: req.session.loggedIn
            } );
        } )
        .catch( err =>
        {
            console.log( err );
            res.status( 500 ).json( err );
        } );
} );

router.get( '/login', ( req, res ) =>
{
    if( req.session.loggedIn ) {
        res.redirect( '/' );
        return;
    }

    res.render( 'login' );
} );

router.get('/hammer', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('hammer');
});

module.exports = router;
