document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerBtn').addEventListener('click', function() {
        // Get input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const message = document.getElementById('message');

        // Clear previous message
        message.textContent = '';

        // Validate inputs
        if (username.length > 10) {
            message.textContent = 'Username must be 10 characters or less.';
            message.style.color = 'red';
            return;
        }

        if (!validateEmail(email)) {
            message.textContent = 'Invalid email format.';
            message.style.color = 'red';
            return;
        }

        if (password.length !== 8) {
            message.textContent = 'Password must be exactly 8 characters.';
            message.style.color = 'red';
            return;
        }

        if (password !== confirmPassword) {
            message.textContent = 'Passwords do not match.';
            message.style.color = 'red';
            return;
        }

        // If all validations pass
        message.textContent = 'Registration successful!';
        message.style.color = 'green';

        // You can add code here to submit the form data to the server or handle it as needed.
    });

    // Helper function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
