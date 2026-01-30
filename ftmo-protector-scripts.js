// Current page tracker
let currentPage = 'home';

// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Show specific page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('[id]').forEach(el => {
        if (['home', 'about', 'contact', 'docs', 'article', 'privacy'].includes(el.id)) {
            el.style.display = 'none';
        }
    });

    // Show requested page
    const page = document.getElementById(pageId);
    if (page) {
        page.style.display = 'block';
        currentPage = pageId;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close mobile menu if open
        const menu = document.getElementById('navMenu');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
    e.target.reset();
    return false;
}

// Initialize page navigation
function initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // Check if it's a page navigation
            if (['home', 'about', 'contact', 'docs', 'article', 'privacy'].includes(targetId)) {
                showPage(targetId);
            } else if (currentPage !== 'home') {
                // If on another page, go to home first then scroll to section
                showPage('home');
                setTimeout(() => {
                    const target = document.getElementById(targetId);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                // Already on home, just scroll to section
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Initialize FAQ functionality
function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.feature-card, .spec-item, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Show home page by default
    showPage('home');

    // Initialize all features
    initNavigation();
    initFAQ();
    initScrollAnimations();
});
