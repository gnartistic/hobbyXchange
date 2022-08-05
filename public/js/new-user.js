// modal
const signupBtn = document.querySelector( '#signup' );
const modalBg = document.querySelector( '.modal-background' );
const modalClose = document.querySelector('#modalClose')
const signUpModal = document.querySelector( '.signUpModal' );
const formSubmit = document.querySelector( '#formSubmit' );

signupBtn.addEventListener( 'click', () =>
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