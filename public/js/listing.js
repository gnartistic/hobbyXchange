// modal
const listingBtn = document.querySelector( '.listing' );
const listingModal = document.querySelector( '.listingModal' );

const modalBgListing = document.querySelector( '#modalBgListing' );

listingBtn.addEventListener( 'click', () =>
{
    listingModal.classList.add( 'is-active' );
} );

modalBgListing.addEventListener( 'click', () =>
{
    listingModal.classList.remove( 'is-active' );
} );