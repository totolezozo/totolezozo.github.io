// Select the button and message elements
const button = document.getElementById('clickButton');
const message = document.getElementById('message');

// Add an event listener to the button
button.addEventListener('click', function() {
    message.textContent = 'You clicked the button!';
});
