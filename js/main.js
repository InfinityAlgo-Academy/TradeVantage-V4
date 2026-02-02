window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle (can be expanded)
const navLinks = document.querySelector('.nav-links');
// Logic for hamburger menu can be added here if needed

// Stats Counter Animation (Simple implementation)
const stats = document.querySelectorAll('.stat-item .val');
const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.innerText.replace('+', '').replace('K', '000'));
        // Implementation for smooth counting if desired
    });
};

// Handle anchor links scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
