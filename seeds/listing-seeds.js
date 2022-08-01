const { Product } = require( '../models' );

const listingData = [
    {
        title: 'Skateboard',
        description: 'I bought this skateboard a couple of months ago, but lost interest in learning to ride it. Still in great condition',
        user_id: 1,
        category_id: 1,
    },
    {
        title: 'Palm sand and Circular Saw',
        description: 'I used these to build my wife a new shelf in her craft room. It honestly looks like crap. Looking for a new hobby.',
        user_id: 3,
        category_id: 5,
    },
    {
        title: 'Guitar',
        description: 'Martin acoustic guitar I got for my birthday from my parents... been sitting and collecting dust ever since.',
        user_id: 4,
        category_id: 4,
    },
    {
        title: 'Oculus Quest 2',
        description: 'This is my oculus quest 2, i bought it thinking id get into VR gaming, but tbh it gives me motion sickness.',
        user_id: 10,
        category_id: 9,
    },
    {
        title: 'Book collection',
        description: "I have a couple books I've already read that I want to pass along to someone else.",
        user_id: 5,
        category_id: 6,
    },
    {
        title: 'Painting Supplies',
        description: "I bought a bunch of stuff to start painting at the beginning of quarantine, now that life has returned back to normal for me, I don't paint as much.",
        user_id: 6,
        category_id: 2,
    },
    {
        title: 'Sewing Machine',
        description: 'I bought this sewing machine in an attemmpt to start making my own clothes. Sadly I didnt succeed, but maybe someone else will!',
        user_id: 7,
        category_id: 3,
    },
    {
        title: 'Tent and Sleeping Bag',
        description: "This is my old trusty tent and sleeping bag. I have taken them on many adventures, but now I'm too old to really get out and camp",
        user_id: 8,
        category_id: 7,
    },
    {
        title: 'Poi Balls',
        description: 'I used to go to a lot of raves and spin poi, but I had a really bad acid trip that ruined the entire expirience... need a healthier hobby',
        user_id: 9,
        category_id: 3,
    },
];

const seedListings = () => Listing.bulkCreate( listingData );

module.exports = seedListings;
