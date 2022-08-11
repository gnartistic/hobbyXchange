// const router = require('express').Router();
// const { Tags, Category, Listing } = require('../../models/');

// router.get('/', (req, res) => {
//     Tags.findAll({
//         attributes: [
//             'id',
//             'tag_name'
//         ],
//         include: [
//             {
//                 model: Listing,
//                     attributes: ['id', 'title', 'description', 'user_id', 'category_id']
//             },
//             {
//                 model: Category,
//                     attributes: ['id', 'category_name']
//             }
//         ]
//     })
//     .then(dbTagData => res.json(dbTagData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.get('/:id', (req, res) => {
//     Tags.findOne({
//         where: {
//             id: req.params.id
//         },
//         attributes: [
//             'id',
//             'tag_name'
//         ],
//         include: [
//             {
//                 model: Listing,
//                     attributes: ['id', 'title', 'description', 'user_id', 'category_id']
//             },
//             {
//                 model: Category,
//                     attributes: ['id', 'category_name']
//             }
//         ]
//     })
//     .then(dbTagData => {
//         if (!dbTagData) {
//             res.status(404).json({ message: 'There is no Tag matching that ID' });
//             return;
//         }
//         res.json(dbTagData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.post('/', (req, res) => {
//     Tags.create({
//         tag_name: req.body.tag_name
//     })
//     .then(dbTagData => res.json(dbTagData))
//     .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//     });
// });

// router.put('/:id', (req, res) => {
//     Tags.update(
//         {
//             tag_name: req.body.tag_name
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }
//     )
//     .then(dbTagData => {
//         if (!dbTagData) {
//             res.status(404).json({ message: 'There is no Tag matching that ID' });
//             return;
//         }
//         res.json(dbTagData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.delete('/:id', (req, res) => {
//     Tags.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbTagData => {
//         if (!dbTagData) {
//             res.status(404).json({ message: 'There is no Tag matching that ID' });
//             return;
//         }
//         res.json(dbTagData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// module.exports = router;