// navigation bar scrolling
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.flexDirection = 'column';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }
});

// scrolling animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// observe all card elements
document.querySelectorAll('.feature-card, .use-case-card, .testimonial-card, .faq-item').forEach(card => {
    observer.observe(card);
});

// faq folding
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // close all faq
        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        });
        
        // If the faq is not currently active, activate it
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('active');
        }
    });
});

// form submission processing (if there is a form)
/*const ctaButton = document.querySelector('.cta-button');
const productCta = document.querySelector('.product-cta');
const productSecondaryCta = document.querySelector('.product-secondary-cta');
const navCta = document.querySelector('.nav-cta');

[ctaButton, productCta, productSecondaryCta, navCta].forEach(button => {
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // you can add registration or login logic here
            alert('Thank you for your interest! Registration is coming soon, so stay tuned.');
        });
    }
});*/

// animation after page loading is complete
window.addEventListener('load', function() {
    document.querySelector('.hero-container').classList.add('fade-in');
});

// dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();