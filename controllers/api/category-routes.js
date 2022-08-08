const router = require('express').Router();
const { Category, Listing } = require('../../models');

router.get('/', (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name'
        ],
        include: [
            {
                model: Listing,
                    attributes: ['id', 'title', 'description', 'user_id', 'category_id']
            }
        ]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'category_name'
        ],
        include: [
            {
                model: Listing,
                    attributes: ['id', 'title', 'description', 'user_id', 'category_id']
            }
        ]
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'There is no Category matching that id' });
            return;
        }
        res.json(dbCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Category.create({
        category_name: req.body.category_name
    })
    .then(addCategoryData => res.json(addCategoryData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
    Category.update(
        {
            category_name: req.body.category_name
        },
        {
            where: {
            id: req.params.id
            },
        }
    )
    .then(updateCategoryData => {
        if (!updateCategoryData) {
            res.status(404).json({ message: 'There is no Category with that ID' });
        }
        res.json(updateCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deleteCategoryData => {
        if (!deleteCategoryData) {
            res.status(404).json({ message: 'There is no Category with that ID' });
        }
        res.json(deleteCategoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;