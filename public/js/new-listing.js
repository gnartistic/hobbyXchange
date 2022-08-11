async function getCategoryId(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="listing-title"]').value;
    const description = document.querySelector('textarea[name="description"]').value;
    const category = document.querySelector('select[name="categories"]').value;
    const categoryArr = ['sports', 'art', 'crafting', 'music', 'woodworking', 'books', 'outdoor', 'miscellaneous', 'tech']
    let category_id;
    console.log(category, categoryArr.length);
    for (let i = 0; i < categoryArr.length; i++) { 
        if (category === categoryArr[i]) {
            category_id = categoryArr[i].length - 1;
            
            
        }
    }

    newFormHandler(title, description, category_id);
    
    async function newFormHandler(title, description, category_id) {
        const response = await fetch('/api/listings', {
            method: 'POST',
            body: JSON.stringify({
                title,
                description,
                category_id
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


}

document.querySelector('.new-listing-form').addEventListener('submit', getCategoryId);