function validateForm() {
    let isValid = true;
    const existingEmails = ["user1@example.com", "user2@example.com", "user3@example.com"]; // Example emails

    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const doesntExistMessage = document.getElementById('doesnt');
    emailError.innerText = '';
    doesntExistMessage.innerText = '';


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.innerText = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = 'Invalid email format.';
        isValid = false;
    } else if (!existingEmails.includes(email)) {
        doesntExistMessage.innerText = 'This email address does not exist!';
        isValid = false;
    } else {
        
        showOTPField();
    }

    return isValid;
}

function showOTPField() {

    document.querySelector('.login-form').innerHTML = `
        <h1 class="text-center pb-3">Code Verification</h1>
        <div class="msg py-3 text-center">We've sent a password reset OTP to your email</div>
        <form onsubmit="return validateOTP()">
            <div class="form-group mt-3">
                <input class="form-control" type="text" placeholder="Enter your code" id="otp">
                <span class="error text-danger" id="otpError"></span>
            </div>
            <div class="form-group">
                <button class="btn btn-primary mt-4 w-100">Submit</button>
            </div>
        </form>
    `;
}

function validateOTP() {
    const otp = document.getElementById('otp').value.trim();
    const otpError = document.getElementById('otpError');
    otpError.innerText = '';

    const correctOTP = "123456"; 

    if (otp === '') {
        otpError.innerText = 'OTP is required.';
        return false;
    } else if (otp !== correctOTP) {
        otpError.innerText = "You've entered an incorrect code!";
        return false;
    } else {
        window.location.href = 'CreatePassword.php';
    return false;
    }
}



function NewPassword() {
    const pass = document.getElementById('pass').value.trim();
    const passError = document.getElementById('passError');

    const pw = document.getElementById('pw').value.trim();
    const pwError = document.getElementById('pwError');

    let isValid = true;

    passError.innerText = '';
    pwError.innerText = '';

    if (pass === '') {
        passError.innerText = 'Password is required.';
        isValid = false;
    } else if (pass.length < 6) {
        passError.innerText = 'Password must be at least 6 characters.';
        isValid = false;
    } else if (pw === '') {
        pwError.innerText = 'Password confirmation is required.';
        isValid = false;
    } else if (pass !== pw) {
        pwError.innerText = 'Passwords do not match.';
        isValid = false;
    } else {
        Showlogin();
    }

    return isValid;
}

function Showlogin(){
    document.querySelector('.login-form').innerHTML = `
        <div class="msg p-3 text-center">Your password has been changed. Now you can login with your new password.</div>
        <form onsubmit="return goToLoginPage()">
            <div class="form-group">
                <button type="submit" class="btn btn-primary mt-5 w-100">Login</button>
            </div>
        </form>
    `;
}

function goToLoginPage() {
    
    window.location.href = 'login.php';
    return false;
}
