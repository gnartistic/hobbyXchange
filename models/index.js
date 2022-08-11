// import all models
const Listing = require( './Listing' );
const User = require( './User' );
const Category = require( './Category' );
// const Tags = require( './Tags' );
// const ListingTag = require( './ListingTags' );

// create associations
User.hasMany( Listing, {
    foreignKey: 'user_id'
} );

Listing.belongsTo( User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
} );

Category.hasMany( Listing, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
} );

Listing.belongsTo( Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
} );

// Listing.belongsToMany( Tags, {
//     through: ListingTag
// } );

// Tags.belongsToMany( Listing, {
//     through: ListingTag
// } );

module.exports = { User, Listing, Category };
