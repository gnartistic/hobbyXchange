const router = require('express').Router();
const withAuth = require( '../utils/auth' );
const { Category, User, Listing } = require('./../models');

router.get('/', withAuth, (req, res) => {
    Listing.findAll({
        where: {
            id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'description',
            'user_id',
            'category_id'
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
        res.render('dashboard', { listings, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
    Listing.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'description',
            'user_id',
            'category_id'
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
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;