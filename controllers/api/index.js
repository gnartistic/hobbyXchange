const router = require( 'express' ).Router();

const userRoutes = require( './user-routes.js' );
const listingRoutes = require( './listing-routes' );
const categoryRoutes = require( './category-routes' );
const tagRoutes = require( './tag-routes' );


router.use( '/users', userRoutes );
router.use( '/listings', listingRoutes );
router.use( '/categories', categoryRoutes );
router.use( '/tags', tagRoutes );

module.exports = router;