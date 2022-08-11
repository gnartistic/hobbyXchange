const router = require('express').Router();
const withAuth = require( '../utils/auth' );
const { Category, User, Listing } = require('./../models');

router.get('/', withAuth, (req, res) => {
    Listing.findByPk(req.session.user_id, {
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
        const listings = dbListingData.map(listing => listing.get({ plain: true }));
        res.render('create-listing', { listings, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;