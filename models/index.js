const Category = require('./Category');
const User = require('./User');
const Tags = require('./Tags');
const Listing = require('./Listing');
const ListingTags = require('./ListingTags');

// Associations
Listing.belongTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Listing, {
    foreignKey: 'category_id'
});

Listing.belongsToMany(Tags, {
    through: ListingTags,
    foreignKey: 'listing_id'
});

Tags.belongsToMany(Listing, {
    through: ListingTags,
    foreignKey: 'tag_id'
});
