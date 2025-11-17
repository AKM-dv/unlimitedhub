// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});



// Smooth scrolling for anchor links
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

// Parallax effect for floating hearts
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hearts = document.querySelectorAll('.heart');
    
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index * 0.1);
        heart.style.transform = `rotate(45deg) translateY(${scrolled * speed}px)`;
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Get the text content without HTML tags for typing animation
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Counter animation for diamond values
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

// Intersection Observer for counter animations
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.diamond-value');
            counters.forEach(counter => {
                const text = counter.textContent;
                if (text.includes('12')) {
                    animateCounter(counter, 12, 1500);
                } else if (text.includes('60')) {
                    animateCounter(counter, 60, 1500);
                } else if (text.includes('1200')) {
                    animateCounter(counter, 1200, 2000);
                } else if (text.includes('300')) {
                    animateCounter(counter, 300, 1500);
                }
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe diamond section for counter animations
const diamondSection = document.querySelector('.diamond-structure');
if (diamondSection) {
    observer.observe(diamondSection);
}

// Floating cards animation enhancement
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-30px) scale(1.05)';
        card.style.boxShadow = '0 15px 40px rgba(255, 107, 157, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    });
});

// Progress bar animation for download section
function animateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = '0%';
        setTimeout(() => {
            progressFill.style.width = '100%';
        }, 500);
    }
}

// Trigger progress animation when download section is visible
const downloadSection = document.querySelector('.download');
if (downloadSection) {
    const downloadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBar();
                downloadObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    downloadObserver.observe(downloadSection);
}

// Feature cards hover effect
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Diamond cards hover effect
const diamondCards = document.querySelectorAll('.diamond-card');
diamondCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.03)';
        card.style.boxShadow = '0 20px 40px rgba(255, 107, 157, 0.25)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Store button hover effects
const storeButtons = document.querySelectorAll('.store-btn');
storeButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});

// Social links hover effect
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px) rotate(360deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Loading animation for page elements
function addLoadingAnimation() {
    const elements = document.querySelectorAll('.feature-card, .diamond-card, .btn');
    elements.forEach((element, index) => {
        element.classList.add('loading');
        setTimeout(() => {
            element.classList.add('loaded');
        }, index * 100);
    });
}

// Trigger loading animation when page loads
window.addEventListener('load', () => {
    setTimeout(addLoadingAnimation, 500);
});

// Scroll to top functionality
function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-pink);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(255, 107, 157, 0.3);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'translateY(0) scale(1)';
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Add CSS variables to document for JavaScript access
document.documentElement.style.setProperty('--primary-pink', '#ff6b9d');
document.documentElement.style.setProperty('--secondary-pink', '#ff8fab');
document.documentElement.style.setProperty('--light-pink', '#ffeef2');

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Parallax effect for floating hearts
    const scrolled = window.pageYOffset;
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index * 0.1);
        heart.style.transform = `rotate(45deg) translateY(${scrolled * speed}px)`;
    });
}, 16));

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.href && this.href.startsWith('#')) {
            return; // Don't add loading for anchor links
        }
        
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        this.style.pointerEvents = 'none';
        
        // Simulate loading (remove this in production)
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.pointerEvents = 'auto';
        }, 2000);
    });
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect CSS
const rippleCSS = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Apply ripple effect to buttons
document.querySelectorAll('.btn, .store-btn').forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.addEventListener('click', createRipple);
});

console.log('UnlimitedHearts landing page loaded successfully.');