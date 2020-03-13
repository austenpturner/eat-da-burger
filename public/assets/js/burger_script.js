// Select DOM elements
const undevouredList = document.getElementById('undevoured-list');
const devouredList = document.getElementById('devoured-list');
const burgerInput = document.getElementById('burger-input');
const submitBtn = document.getElementById('submit-btn');

document.onload = event => {
    event.preventDefault();
    submitBtn.addEventListener('click', () => {
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
        });
    });
};