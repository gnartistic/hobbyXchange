const { Category } = require( '../models' );

const categoryData = [
    {
        category_name: 'Sports',
    },
    {
        category_name: 'Art',
    },
    {
        category_name:'Crafting',
    },
    {
        category_name: 'Music',
    },
    {
        category_name: 'Woodworking',
    },
    {
        category_name: 'Books',
    },
    {
        category_name: 'Outdoor',
    },
    {
        category_name:'Miscellaneous'
    },
    {
        category_name: 'Tech'
    }
];

const seedCategories = () => Category.bulkCreate( categoryData );

module.exports = seedCategories;