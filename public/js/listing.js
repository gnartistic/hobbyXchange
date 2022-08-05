// modal
const ListingBtn = document.querySelector( '#listing' );
const modalBg = document.querySelector( '.modal-background' );
const listingModal = document.querySelector( '.listingModal' );

signupBtn.addEventListener( 'click', () =>
{
    listingModal.classList.add( 'is-active' );
} );

modalBg.addEventListener( 'click', () =>
{
    listingModal.classList.remove( 'is-active' );
} );