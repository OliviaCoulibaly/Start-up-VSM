document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        phone: document.getElementById('phone').value || null,  // Si le champ est optionnel
    };

    const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);  // Affiche la réponse du serveur pour vérifier que la soumission a fonctionné

    if (response.ok) {
        alert('Message envoyé avec succès');
    } else {
        alert('Échec de l\'envoi: ' + result.message);
    }
});
