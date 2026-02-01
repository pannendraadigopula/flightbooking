document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (email && password) {
            // Mock successful login
            // In a real app, this would be an API call
            console.log('Login successful');

            // Store user info in session
            sessionStorage.setItem('user', JSON.stringify({ email: email }));

            // Redirect to home page
            window.location.href = 'home.html';
        } else {
            alert('Please fill in all fields');
        }
    });

    // Simple input animation helper if needed, 
    // though CSS :placeholder-shown handles most of it.
});
