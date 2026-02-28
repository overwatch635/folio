// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.backgroundColor = 'white';
    navLinks.style.padding = '20px';
    navLinks.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
    
    if (navLinks.style.display === 'flex') {
        navLinks.querySelectorAll('li').forEach(li => {
            li.style.margin = '10px 0';
        });
    }
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Gestion du formulaire de contact (simulé)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des valeurs
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Ici, normalement, tu enverrais les données à un serveur
        // Pour l'exemple, on simule un envoi réussi
        alert(`Merci ${name} ! Votre message a été envoyé. Je vous répondrai à ${email} dans les plus brefs délais.`);
        
        // Réinitialisation du formulaire
        contactForm.reset();
    });
}

// Animation au scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observer les sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mise à jour de l'année dans le footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});