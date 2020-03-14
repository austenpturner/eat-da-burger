// Select DOM elements
// const undevouredList = document.getElementById('undevoured-list');
const devouredList = document.getElementById('devoured-list');
const devourBtns = document.getElementsByClassName('devour-btn');
const deleteBtns = document.getElementsByClassName('delete-btn');
const burgerInput = document.getElementById('burger-input');
const submitBtn = document.getElementById('submit-btn');

// Submit button event listener to post new burger to burger db and display in browser
submitBtn.addEventListener('click', event => {
    event.preventDefault();
    const burgerName = burgerInput.value.trim();
    console.log(burgerName);
    const newBurger = {
        burger_name: burgerName,
        devoured: false
    }
    fetch('/api/burgers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBurger)
    }).then( res => {
        return res.json();
    }).then( data => {
        console.log(data);
        location.reload();
    });
});

// Devour buttons event listener to update burger devour value and move burger to devoured list
for (let i = 0; i < devourBtns.length; i++) {
    const devourBtn = devourBtns[i];
    devourBtn.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        const id = parseInt(target.previousElementSibling.firstElementChild.textContent);
        const updateDevoured = {
            devoured: true
        }
        fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateDevoured)
        }).then( res => {
            return res.json();
        }).then ( data => {
            console.log(`${data} update(s) made`);
            location.reload();
        });
    });
};

// Delete buttons event listener to delete burger from db and no longer display in browser
for (let i = 0; i < deleteBtns.length; i++) {
    const deleteBtn = deleteBtns[i];
    deleteBtn.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        const id = parseInt(target.previousElementSibling.firstElementChild.textContent);
        console.log(id);
        fetch(`/api/burgers/${id}`, {
            method: 'DELETE'
        }).then( res => {
            return res.json();
        }).then( data => {
            console.log(`${data} deletes(s) made`);
            location.reload();
        })
    });
};

