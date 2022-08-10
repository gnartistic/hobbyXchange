// modal
const signUpBtn = document.querySelector( '#signUp' );
const modalBg = document.querySelector( '.modal-background' );
const modalClose = document.querySelector('#modalClose')
const signUpModal = document.querySelector( '.signUpModal' );
const signupForm = document.querySelector( '#signup-form' );

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
function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const name = document.querySelector( '#name-signup' ).value.trim();
    const username = document.querySelector( '#username-signup' ).value.trim();
    const wishList = document.querySelector( '#wish-list-signup' ).value.trim();

    if (email && password) {
        const response = fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify( {
                name,
                username,
                wishList,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace( '/' );
            console.log( 'success!' );
        } else {
            alert( 'Failed to sign up.' );
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);