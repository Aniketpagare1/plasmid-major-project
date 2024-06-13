document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Clear previous error messages
        clearErrors();

        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        // Validation flags
        let isValid = true;

        // Name validation
        if (fullName.length < 5) {
            showError('fullNameError', 'Full name must be at least 5 characters long.');
            isValid = false;
        }

        // Email validation
        if (!email.includes('@')) {
            showError('emailError', 'Enter a valid email address.');
            isValid = false;
        }

        // Phone number validation
        if (phone === '123456789' || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
            showError('phoneError', 'Enter a valid 10-digit phone number.');
            isValid = false;
        }

        // Password validation
        if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
            showError('passwordError', 'Password must be at least 8 characters long and not be "password" or your name.');
            isValid = false;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match.');
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Reset the form
        }
    });

    // Function to show error messages
    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    // Function to clear all error messages
    function clearErrors() {
        document.getElementById('fullNameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('confirmPasswordError').textContent = '';
    }
});
