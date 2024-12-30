document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic username and password check
        if (username === 'admin' && password === 'password') {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Invalid username or password';
        }
    });
});
