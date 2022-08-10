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



// sign up form
async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const name = document.querySelector( '#name-signup' ).value.trim();
    const username = document.querySelector( '#username-signup' ).value.trim();
    const wishList = document.querySelector( '#wish-list-signup' ).value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            methos: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);