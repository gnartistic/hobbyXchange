async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="listing-title"]').value.trim();
    const description = document.querySelector('textarea[name="description"]').value.trim();
    const category = document.querySelector('select[name="categories"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
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
        document.location.replace('/user-listings');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-listing-form').addEventListener('submit', editFormHandler);