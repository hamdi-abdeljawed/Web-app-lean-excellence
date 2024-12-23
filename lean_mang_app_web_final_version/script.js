// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    if (header) {
        header.style.backgroundPosition = `center ${scroll * 0.5}px`;
    }
});

// Animate DMAIC icons on hover
document.querySelectorAll('.dmaic-step').forEach(step => {
    step.addEventListener('mouseenter', () => {
        const icon = step.querySelector('.dmaic-icon i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    step.addEventListener('mouseleave', () => {
        const icon = step.querySelector('.dmaic-icon i');
        icon.style.transform = 'scale(1) rotate(0)';
    });
});

// Add transition to DMAIC icons
document.querySelectorAll('.dmaic-icon i').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});
