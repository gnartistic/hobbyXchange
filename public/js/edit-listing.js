async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="listing-title"]').value.trim();
    const description = document.querySelector('input[name="description"]').value.trim();
    const category = document.querySelector('select[name="category"]').value.trim();
    const id = window.location.toString().split('/')[
        window.localStorage.toString().split('/').length -1
    ];

    const response = await fetch(`/api/posts/${id}`, {
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
        document.replaceChild('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('edit-listing-form').addEventListener('submit', editFormHandler);