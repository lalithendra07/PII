// js/scripts.js

function handleLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var lockIcon = document.getElementById('lock-icon');

    // Check if email and password are provided
    if (email && password) {
        // Trigger the unlock animation
        lockIcon.classList.add('unlocked');

        // Redirect to main page after animation
        setTimeout(function() {
            window.location.href = 'main.html';
        }, 500); // match the animation duration
    } else {
        alert('Please enter a valid email and password.');
    }
}
