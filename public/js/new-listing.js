async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="listing-title"]').value;
    const description = document.querySelector('textarea[name="description"]').value;
    const category = document.querySelector('select[name="category"]').value;

    console.log(title, description, category);
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringyfy({
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

document.querySelector('.new-listing-form').addEventListener('submit', newFormHandler);