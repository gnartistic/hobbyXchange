// modal
const signUpBtn = document.querySelector( '#signUp' );
const modalBg = document.querySelector( '.modal-background' );
const modalClose = document.querySelector('#modalClose')
const signUpModal = document.querySelector( '.signUpModal' );
const formSubmit = document.querySelector( '#formSubmit' );
// listing modal
const listingBtn = document.querySelector( '.listing' );
const listingModal = document.querySelector( '.listingModal' );

const modalBgListing = document.querySelector( '#modalBgListing' );


signUpBtn.addEventListener( 'click', () =>
{
    signUpModal.classList.add( 'is-active' );
} );

modalBg.addEventListener( 'click', () =>
{
    signUpModal.classList.remove( 'is-active' );
} );

formSubmit.addEventListener( 'click', () =>
{
    
} );
//listing modal
listingBtn.addEventListener( 'click', () =>
{
    listingModal.classList.add( 'is-active' );
} );

modalBgListing.addEventListener( 'click', () =>
{
    listingModal.classList.remove( 'is-active' );
} );