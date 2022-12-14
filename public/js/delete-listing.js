async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/listings/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/user-listings');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-listing').addEventListener('click', deleteFormHandler);