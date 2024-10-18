// Gestion du formulaire de connexion
document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const data = {
        email: document.getElementById('login-email').value,
        password: document.getElementById('login-password').value
    };

    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
        alert('Connexion réussie');
        // Redirige vers le tableau de bord
        window.location.href = '/dashboard';
    } else {
        alert('Échec de la connexion: ' + result.message);
    }
});

// Gestion du formulaire d'inscription
document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('register-name').value,
        email: document.getElementById('register-email').value,
        password: document.getElementById('register-password').value
    };

    const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
        alert('Inscription réussie. Veuillez vous connecter.');
    } else {
        alert('Échec de l\'inscription: ' + result.message);
    }
});
