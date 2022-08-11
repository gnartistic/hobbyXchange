async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace( '/' );
        alert( 'Logged out.' );
    } else {
        alert( response.statusText );
        alert( 'log out failed' );
    }
}

document.querySelector('#logout').addEventListener('click', logout);