document.addEventListener('DOMContentLoaded', function() {
    const createForm = document.querySelector('.create-container form');

    createForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const auxiliary = document.getElementById('auxiliary').value;

        // Create a user object
        const user = {
            email: email,
            username: username,
            password: password,
            auxiliary: auxiliary
        };

        // Store the user information in localStorage (for demonstration purposes)
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to the home page (main.html)
        window.location.href = 'main.html';
    });
});
