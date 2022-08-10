const loginFormHandler = async ( event ) =>
{
    event.preventDefault();

    const username = document.querySelector( '#email-login' ).value.trim();
    const password = document.querySelector( '#password-login' ).value.trim();

    if( username && password ) {
        const response = await fetch( '/api/users/login', {
            method: 'POST',
            body: JSON.stringify( { username, password } ),
            headers: { 'Content-Type': 'application/json' },
        } );

        if( response.ok ) {
            document.location.replace( '/' );
        } else {
            alert( 'Failed to log in.' );
        }
    }
};


// login modal
// modal
const loginBtn = document.querySelector( '#login' );
const loginModal = document.querySelector( '.loginModal' );

const modalBgLogin = document.querySelector( '.modalBgLogin' );

loginBtn.addEventListener( 'click', () =>
{
    loginModal.classList.add( 'is-active' );
} );

modalBgLogin.addEventListener( 'click', () =>
{
    loginModal.classList.remove( 'is-active' );
} );

document.querySelector( '.login-form' ).addEventListener( 'submit', loginFormHandler );