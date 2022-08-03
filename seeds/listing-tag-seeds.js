const { ListingTag } = require( '../models' );

const listingTagData = [
    {
        listing_id: 1,
        tag_id: 10,
    },
    {
        listing_id: 2,
        tag_id: 12,
    },
    {
        listing_id: 2,
        tag_id: 14,
    },
    {
        listing_id: 3,
        tag_id: 2,
    },
    {
        listing_id: 4,
        tag_id: 15,
    },
    {
        listing_id: 4,
        tag_id: 13,
    },
    {
        listing_id: 5,
        tag_id: 5,
    },
    {
        listing_id: 5,
        tag_id: 6,
    },
    {
        listing_id: 6,
        tag_id: 1,
    },
    {
        listing_id: 6,
        tag_id: 14,
    },
    {
        listing_id: 7,
        tag_id: 6,
    },
    {
        listing_id: 7,
        tag_id: 7,
    },
    {
        listing_id: 7,
        tag_id: 14,
    },
    {
        listing_id: 8,
        tag_id: 10,
    },
    {
        listing_id: 8,
        tag_id: 8,
    },
    {
        listing_id: 8,
        tag_id: 9,
    },
    {
        listing_id: 9,
        tag_id: 11,
    },
];

const seedListingTags = () => ListingTag.bulkCreate( listingTagData );

module.exports = seedListingTags;
