const router = require('express').Router();
const withAuth = require( '../utils/auth' );
const { Category, User, Listing } = require('./../models');

router.get('/', withAuth, (req, res) => {
    
    Listing.findAll({
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
                    attributes: ['id', 'username', 'email', 'name', 'wish_list']
            },
            {
                model: Category,
                    attributes: ['id', 'category_name']
            }
        ]
    })
    .then(dbListingData => {
        // console.log(dbListingData);
        getUserListings(dbListingData, req.session.user_id, res);
       
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

async function getUserListings(dbListingData, userId, res) {
    let listings = []
    const userListings = dbListingData.map(listing => listing.get({ plain: true }));
    for (let i = 0; i < userListings.length; i++) {
        if (userId === userListings[i].user_id) {
            let result = userListings[i];
            listings.push(result);            
        }
    }

    await res.render('user-listings', { listings, loggedIn: true });
    return;
}

router.get('/edit/:id', withAuth, (req, res) => {
    Listing.findOne({
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
            'updated_at'
        ],
        include: [
            {
                model: Category,
                    attributes: ['id', 'category_name']
            }
        ]
    })
    .then(dbListingData => {
        const listings = dbListingData.get({ plain: true });
        console.log(listings);
        res.render('edit-listing', { listings, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;