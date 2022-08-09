const router = require('express').Router();
const { Listing, User, Category } = require('../../models');

router.get('/', (req, res) => {
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
                    attributes: ['id', 'username', 'email', 'name']
            },
            {
                model: Category,
                    attributes: ['id', 'category_name']
            }
        ]
    })
    .then(dbListingData => res.json(dbListingData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
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
                model: User,
                    attributes: ['id', 'username', 'email', 'name']
            },
            {
                model: Category,
                    attributes: ['id', 'category_name']
            }
        ]
    })
    .then(dbListingData => {
        if (!dbListingData) {
            res.status(404).json({ message: 'There is no listing matching that ID' });
            return;
        }
        res.json(dbListingData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
        Listing.create({
            title: req.body.title,
            description: req.body.description,
            // change back to session instead of body once path confirmed working
            user_id: req.body.user_id,
            category_id: req.body.category_id
        })
        .then(dbListingData => res.json(dbListingData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });    
});

router.put('/:id', (req, res) => {
    Listing.update(
        {
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id,
            category_id: req.body.category_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbListingData => res.json(dbListingData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Listing.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbListingData => {
        if (!dbListingData) {
            res.status(404).json({ message: 'There is no listing matching that ID' });
            return;
        }
        res.json(dbListingData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;