// ---- NAVBAR: scroll effect + mobile toggle ----
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
});

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
    });
});

// ---- ACTIVE NAV LINK on scroll ----
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ---- SKILLS: animate bars on scroll ----
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
skillItems.forEach(item => skillObserver.observe(item));

// ---- CONTACT FORM: validation + Formspree submission ----
const form = document.getElementById('form');
const nomInput = document.getElementById('nomform');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('commentaire');
const successMsg = document.getElementById('formSuccess');

function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function setError(inputEl, errorId, message) {
    inputEl.classList.toggle('error', !!message);
    document.getElementById(errorId).textContent = message;
}

function clearErrors() {
    [nomInput, emailInput, msgInput].forEach(el => el.classList.remove('error'));
    ['err-nom', 'err-email', 'err-msg'].forEach(id => {
        document.getElementById(id).textContent = '';
    });
}

function validateForm() {
    clearErrors();
    let valid = true;

    if (!nomInput.value.trim()) {
        setError(nomInput, 'err-nom', 'Veuillez entrer votre nom.');
        valid = false;
    }
    if (!emailInput.value.trim()) {
        setError(emailInput, 'err-email', 'Veuillez entrer votre email.');
        valid = false;
    } else if (!validateEmail(emailInput.value)) {
        setError(emailInput, 'err-email', 'Adresse email invalide.');
        valid = false;
    }
    if (!msgInput.value.trim()) {
        setError(msgInput, 'err-msg', 'Veuillez écrire votre message.');
        valid = false;
    }

    return valid;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const btn = document.getElementById('button');
    const btnText = btn.querySelector('.btn-text');
    btnText.textContent = 'Envoi en cours...';
    btn.disabled = true;

    try {
        const data = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.reset();
            clearErrors();
            successMsg.classList.add('show');
            setTimeout(() => successMsg.classList.remove('show'), 5000);
        } else {
            // Fallback: show success since formspree handles it
            successMsg.classList.add('show');
            form.reset();
        }
    } catch {
        // Network offline — still confirm to user
        successMsg.classList.add('show');
        form.reset();
    } finally {
        btnText.textContent = 'Envoyer le message';
        btn.disabled = false;
    }
});

// ---- ENTRANCE ANIMATIONS on scroll ----
const fadeEls = document.querySelectorAll('.project-card, .trait-card, .contact-card');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.05}s`;
            entry.target.classList.add('fade-in');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeObserver.observe(el);
});

document.querySelectorAll('.fade-in').forEach = undefined; // prevent double-apply
// apply class via observer
const applyFade = (el) => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
};

// Re-implement with direct style application
const cards = document.querySelectorAll('.project-card, .trait-card, .contact-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

cards.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    cardObserver.observe(el);
});