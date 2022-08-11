const router = require( 'express' ).Router();

const apiRoutes = require( './api/' );
const homeRoutes = require( './home-routes.js' );
const createListingRoutes = require( './create-listing-route.js' );
const userListingRoutes = require( './dashboard-routes.js');

router.use( '/', homeRoutes );
router.use( '/create-listing', createListingRoutes );
router.use( '/user-listings', userListingRoutes );
router.use( '/api', apiRoutes );

module.exports = router;