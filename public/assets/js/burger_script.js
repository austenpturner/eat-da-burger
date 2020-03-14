// Select DOM elements
const undevouredList = document.getElementById('undevoured-list');
const devouredList = document.getElementById('devoured-list');
const burgerInput = document.getElementById('burger-input');
const submitBtn = document.getElementById('submit-btn');

const devourBtns = document.getElementsByClassName('devour-btn');

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
}

