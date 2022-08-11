const editListingBtn = document.querySelector( '#edit' );
const modalBg = document.querySelector( '.modal-background' );
const modalClose = document.querySelector('#modalClose')
const editListingModal = document.querySelector( '.editListingModal' );
const formSubmit = document.querySelector( '.edit-list' );

editListingBtn.addEventListener( 'click', () =>
{
    editListingModal.classList.add( 'is-active' );
} );

modalBg.addEventListener( 'click', () =>
{
    editListingModal.classList.remove( 'is-active' );
} );

// formSubmit.addEventListener( 'click', () =>
// {
    
// } );

async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="listing-title"]').value.trim();
    const description = document.querySelector('textarea[name="description"]').value.trim();
    const category = document.querySelector('select[name="category"]').value.trim();
    const id = window.location.toString().split('/')[
        window.localStorage.toString().split('/').length -1
    ];
    console.log(title, description, category, id);
    const response = await fetch(`/api/listings/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            category
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.replaceChild('/user-listings');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#edit-list').addEventListener('submit', editFormHandler);