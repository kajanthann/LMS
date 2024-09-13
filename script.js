function validateForm() {
    let isValid = true;

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required.';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters.';
        isValid = false;
    }

    return isValid; 
}
