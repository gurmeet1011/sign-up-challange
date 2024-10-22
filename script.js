// Get elements
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

// Email validation function
function validateEmail() {
    const emailValue = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    // Check if email has more than 3 characters, contains "@" and "."
    if (emailRegex.test(emailValue)) {
        emailError.style.visibility = 'hidden';
        return true;
    } else {
        emailError.textContent = 'Invalid email format.';
        emailError.style.visibility = 'visible';
        return false;
    }
}

// Password validation function
function validatePassword() {
    const passwordValue = passwordInput.value;

    // Check if password has more than 8 characters
    if (passwordValue.length >= 8) { // Changed to >= to meet the requirement
        passwordError.style.visibility = 'hidden';
        return true;
    } else {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordError.style.visibility = 'visible';
        return false;
    }
}

// Show success message if both inputs are valid
function validateForm() {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        successMessage.textContent = 'All good to go!';
        successMessage.style.visibility = 'visible';
    } else {
        successMessage.style.visibility = 'hidden';
    }
}

// Form submit handler
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Confirm signup
    const confirmation = confirm('Do you want to sign up?');
    
    if (confirmation) {
        // If user presses "OK", show successful signup message
        alert('Successful signup!');
        form.reset();
        emailError.style.visibility = 'hidden';
        passwordError.style.visibility = 'hidden';
        successMessage.style.visibility = 'hidden';

    } else {
        // If user presses "Cancel", reset the form
        form.reset();
        emailError.style.visibility = 'hidden';
        passwordError.style.visibility = 'hidden';
        successMessage.style.visibility = 'hidden';
    }
});

// Add event listeners for onChange validation
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

