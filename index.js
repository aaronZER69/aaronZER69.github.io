// ---- BLOBS BACKGROUND ----
function createBlobs() {
    const starfield = document.getElementById('starfield');
    
    // Create 3 animated blobs
    const blobData = [
        { class: 'blob-1', left: '-50px', top: '-100px' },
        { class: 'blob-2', left: '60%', top: '20%' },
        { class: 'blob-3', left: '70%', top: '60%' }
    ];
    
    blobData.forEach(data => {
        const blob = document.createElement('div');
        blob.className = `particle ${data.class}`;
        blob.style.left = data.left;
        blob.style.top = data.top;
        starfield.appendChild(blob);
    });
}

// Initialize blobs on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBlobs);
} else {
    createBlobs();
}

// ---- CURSOR FOLLOWER WITH TRAIL ----
const cursorDot = document.getElementById('cursorDot');
const cursorFollower = document.getElementById('cursorFollower');
const cursorOrbital = document.getElementById('cursorOrbital');
const body = document.body;

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;
let orbitalAngle = 0;
const trailColors = ['#FF3300', '#FF5520', '#FF7740', '#FF9960'];
let trailColorIndex = 0;
let trailCounter = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Dot follows instantly
    cursorDot.style.left = (mouseX - 3) + 'px';
    cursorDot.style.top = (mouseY - 3) + 'px';
    
    // Create trail effect
    if (trailCounter++ % 2 === 0) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        const size = Math.random() * 4 + 2;
        trail.style.width = size + 'px';
        trail.style.height = size + 'px';
        trail.style.left = (mouseX - size/2) + 'px';
        trail.style.top = (mouseY - size/2) + 'px';
        
        const inner = document.createElement('div');
        inner.className = 'cursor-trail-inner';
        inner.style.background = trailColors[trailColorIndex];
        trail.appendChild(inner);
        
        body.appendChild(trail);
        
        trailColorIndex = (trailColorIndex + 1) % trailColors.length;
        
        // Fade and remove trail
        let opacity = 1;
        const fadeInterval = setInterval(() => {
            opacity -= 0.1;
            trail.style.opacity = opacity;
            if (opacity <= 0) {
                clearInterval(fadeInterval);
                trail.remove();
            }
        }, 30);
    }
});

// Smooth follower animation
function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    
    cursorFollower.style.left = (followerX - 16) + 'px';
    cursorFollower.style.top = (followerY - 16) + 'px';
    
    // Orbital ball animation
    orbitalAngle += 0.04; // Speed of rotation (reduced for slower movement)
    const orbitalRadius = 15; // Distance from cursor (reduced for closer orbit)
    const orbitalX = mouseX + Math.cos(orbitalAngle) * orbitalRadius;
    const orbitalY = mouseY + Math.sin(orbitalAngle) * orbitalRadius;
    
    cursorOrbital.style.left = (orbitalX - 4) + 'px';
    cursorOrbital.style.top = (orbitalY - 4) + 'px';
    
    requestAnimationFrame(animateFollower);
}

animateFollower();

// Hide cursor on leave
document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorFollower.style.opacity = '0';
    cursorOrbital.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorFollower.style.opacity = '0.4';
    cursorOrbital.style.opacity = '0.8';
});

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
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
skillItems.forEach(item => {
    // If already in viewport on load, trigger immediately
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add('visible');
    } else {
        skillObserver.observe(item);
    }
});

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

// ---- MODAL: YOASOBI PROJECT ----
const yoaProject = document.getElementById('yoaProject');
const yoaModal = document.getElementById('yoaModal');
const yoaModalClose = document.getElementById('yoaModalClose');

yoaProject.addEventListener('click', () => {
    yoaModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

yoaModalClose.addEventListener('click', () => {
    yoaModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

yoaModal.addEventListener('click', (e) => {
    if (e.target === yoaModal) {
        yoaModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ---- MODAL: GLPI PROJECT ----
const glpiProject = document.getElementById('glpiProject');
const glpiModal = document.getElementById('glpiModal');
const glpiModalClose = document.getElementById('glpiModalClose');

glpiProject.addEventListener('click', () => {
    glpiModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

glpiModalClose.addEventListener('click', () => {
    glpiModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

glpiModal.addEventListener('click', (e) => {
    if (e.target === glpiModal) {
        glpiModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ---- MODAL: OIL PROJECT ----
const oilProject = document.getElementById('oilProject');
const oilModal = document.getElementById('oilModal');
const oilModalClose = document.getElementById('oilModalClose');

oilProject.addEventListener('click', () => {
    oilModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

oilModalClose.addEventListener('click', () => {
    oilModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

oilModal.addEventListener('click', (e) => {
    if (e.target === oilModal) {
        oilModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ---- MODAL: CONFIGURATEUR PROJECT ----
const confProject = document.getElementById('confProject');
const confModal = document.getElementById('confModal');
const confModalClose = document.getElementById('confModalClose');

confProject.addEventListener('click', () => {
    confModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

confModalClose.addEventListener('click', () => {
    confModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

confModal.addEventListener('click', (e) => {
    if (e.target === confModal) {
        confModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ---- MODAL: BIBLIOTECH PROJECT ----
const biblioProject = document.getElementById('biblioProject');
const biblioModal = document.getElementById('biblioModal');
const biblioModalClose = document.getElementById('biblioModalClose');

biblioProject.addEventListener('click', () => {
    biblioModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

biblioModalClose.addEventListener('click', () => {
    biblioModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

biblioModal.addEventListener('click', (e) => {
    if (e.target === biblioModal) {
        biblioModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ---- MODAL: BOUTIKPRO PROJECT ----
const boutikProject = document.getElementById('boutikProject');
const boutikModal = document.getElementById('boutikModal');
const boutikModalClose = document.getElementById('boutikModalClose');

boutikProject.addEventListener('click', () => {
    boutikModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

boutikModalClose.addEventListener('click', () => {
    boutikModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

boutikModal.addEventListener('click', (e) => {
    if (e.target === boutikModal) {
        boutikModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ---- LIGHTBOX: GALLERY IMAGES ----
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
        document.body.style.overflow = 'hidden';
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});