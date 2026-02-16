// Navbar fade in on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 200) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
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

// Typing animation function
function typeText(element, text, speed = 30) {
    return new Promise((resolve) => {
        element.textContent = '';
        element.classList.add('typing-cursor');
        let index = 0;
        
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    element.classList.remove('typing-cursor');
                    resolve();
                }, 500);
            }
        }, speed);
    });
}

// Intersection Observer for typing animations
const typingObserverOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.typed) {
            entry.target.dataset.typed = 'true';
            const text = entry.target.textContent;
            
            // Add delay based on element position
            const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
            
            setTimeout(() => {
                typeText(entry.target, text, 20);
            }, delay);
        }
    });
}, typingObserverOptions);

// Observe all typing text elements
document.querySelectorAll('.typing-text').forEach(element => {
    typingObserver.observe(element);
});

// Fade in animations for other elements
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.6s ease';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

// Observe experience and project items
document.querySelectorAll('.experience-item, .project-card, .about-text').forEach(item => {
    fadeObserver.observe(item);
});

// Education items animation
const educationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.education-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                    item.style.transition = 'all 0.5s ease';
                }, index * 200);
            });
        }
    });
}, { threshold: 0.3 });

const educationSection = document.querySelector('.education-section');
if (educationSection) {
    educationObserver.observe(educationSection);
}

// Skills animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.skill-category');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                    item.style.transition = 'all 0.5s ease';
                }, index * 150);
            });
        }
    });
}, { threshold: 0.3 });

const skillsContainer = document.querySelector('.skills-container');
if (skillsContainer) {
    skillsObserver.observe(skillsContainer);
}

// Contact text animation
const contactTextObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.contact p');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                    item.style.transition = 'all 0.6s ease';
                }, index * 300);
            });
        }
    });
}, { threshold: 0.5 });

const contactSection = document.querySelector('.contact');
if (contactSection) {
    contactTextObserver.observe(contactSection);
}