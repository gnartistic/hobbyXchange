const seedUsers = require( './user-seeds' );
const seedCategories = require( './category-seeds' );
const seedListings = require( './listing-seeds' );
const seedTags = require( './tag-seeds' );
const seedListingTags = require( './listing-tag-seeds' );

const sequelize = require( '../config/connection' );

const seedAll = async () =>
{
    await sequelize.sync( { force: true } );
    console.log( '\n----- DATABASE SYNCED -----\n' );
    await seedUsers();
    console.log( '----- USERS SEEDED -----\n' );

    await seedCategories();
    console.log( '\n----- CATEGORIES SEEDED -----\n' );

    await seedListings();
    console.log( '\n----- LISTINGS SEEDED -----\n' );

    await seedTags();
    console.log( '\n----- TAGS SEEDED -----\n' );

    await seedListingTags();
    console.log( '\n----- LISTING TAGS SEEDED -----\n' );

    process.exit( 0 );
};

seedAll();