// ===========================
// Smooth Scroll Navigation
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Form Submission
// ===========================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const inputs = this.querySelectorAll('input, textarea');
        const formData = {
            name: inputs[0].value,
            email: inputs[1].value,
            message: inputs[2].value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Show success message
        alert(`Thank you ${formData.name}! Your message has been sent.`);
        
        // Reset form
        this.reset();
    });
}

// ===========================
// Active Navigation Link
// ===========================

window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Scroll Animation
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and skill items
document.querySelectorAll('.project-card, .skill-item, .about-content').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===========================
// Mobile Menu Toggle (optional)
// ===========================

// If you add a hamburger menu, you can toggle it here
const navMenu = document.querySelector('.nav-menu');
if (navMenu) {
    navMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// ===========================
// CTA Button Click
// ===========================

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

console.log('Portfolio script loaded successfully!');
