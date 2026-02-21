/**
 * Portfolio Website JavaScript
 * Features: Typing animation, Scroll reveal, Form validation, Dark mode, Project filtering, and more
 * Author: Your Name
 * Version: 1.0.0
 */

// ============================================
// DOM ELEMENTS
// ============================================

const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const mobileToggle = document.getElementById('mobileToggle');
const mobileOverlay = document.getElementById('mobileOverlay');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const scrollProgress = document.getElementById('scrollProgress');
const scrollTopBtn = document.getElementById('scrollTop');
const typingText = document.getElementById('typingText');
const particlesContainer = document.getElementById('particles');
const contactForm = document.getElementById('contactForm');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const statNumbers = document.querySelectorAll('.stat-number');
const currentYear = document.getElementById('currentYear');

// ============================================
// TYPING ANIMATION
// ============================================

const roles = [
    'IT Support Specialist',
    'Data Analyst',
    'Cloud Computing Enthusiast',
    'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeAnimation() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next
    }
    
    setTimeout(typeAnimation, typingSpeed);
}

// ============================================
// PARTICLES ANIMATION
// ============================================

function createParticles() {
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning and animation
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 10;
        const size = 2 + Math.random() * 4;
        
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// NAVIGATION
// ============================================

// Mobile menu toggle
function toggleMobileMenu() {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    mobileToggle.classList.remove('active');
    navMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Active section highlight
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Smooth scroll for navigation links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        closeMobileMenu();
    }
}

// ============================================
// SCROLL PROGRESS
// ============================================

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    scrollProgress.style.width = `${scrollPercent}%`;
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function handleScrollTopButton() {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// DARK/LIGHT MODE TOGGLE
// ============================================

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// ============================================
// SKILL PROGRESS BARS ANIMATION
// ============================================

function initSkillBars() {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = `${width}%`;
                }, 200);
                
                skillsObserver.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillProgressBars.forEach(bar => skillsObserver.observe(bar));
}

// ============================================
// STAT COUNTER ANIMATION
// ============================================

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += step;
        
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

function initStatCounters() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
}

// ============================================
// PROJECT FILTERING
// ============================================

function filterProjects() {
    const filter = this.getAttribute('data-filter');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    
    // Filter projects
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            card.classList.add('hidden');
        }
    });
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================

const formValidation = {
    name: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Please enter a valid name (at least 2 characters)'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    subject: {
        required: true,
        minLength: 3,
        message: 'Subject must be at least 3 characters'
    },
    message: {
        required: true,
        minLength: 10,
        message: 'Message must be at least 10 characters'
    }
};

function validateField(field, rules) {
    const value = field.value.trim();
    const errorElement = document.getElementById(`${field.id}Error`);
    
    // Reset error state
    field.classList.remove('error');
    errorElement.textContent = '';
    
    // Required check
    if (rules.required && !value) {
        showFieldError(field, errorElement, 'This field is required');
        return false;
    }
    
    // Min length check
    if (rules.minLength && value.length < rules.minLength) {
        showFieldError(field, errorElement, rules.message);
        return false;
    }
    
    // Pattern check
    if (rules.pattern && !rules.pattern.test(value)) {
        showFieldError(field, errorElement, rules.message);
        return false;
    }
    
    return true;
}

function showFieldError(field, errorElement, message) {
    field.classList.add('error');
    errorElement.textContent = message;
}

function showFormStatus(status, message) {
    const formStatus = document.getElementById('formStatus');
    formStatus.className = `form-status ${status}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';
    
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    let isValid = true;
    
    // Validate all fields
    Object.keys(formValidation).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        const rules = formValidation[fieldName];
        
        if (!validateField(field, rules)) {
            isValid = false;
        }
    });
    
    if (isValid) {
        // Simulate form submission
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        setTimeout(() => {
            showFormStatus('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1500);
    } else {
        showFormStatus('error', 'Please correct the errors above and try again.');
    }
}

function initFormValidation() {
    // Real-time validation
    Object.keys(formValidation).forEach(fieldName => {
        const field = document.getElementById(fieldName);
        const rules = formValidation[fieldName];
        
        field.addEventListener('blur', () => validateField(field, rules));
        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                validateField(field, rules);
            }
        });
    });
    
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

function handleKeyboardNavigation(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for high-frequency events
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    // Load saved theme
    loadTheme();
    
    // Set current year in footer
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Initialize typing animation
    if (typingText) {
        typeAnimation();
    }
    
    // Create particles
    if (particlesContainer) {
        createParticles();
    }
    
    // Initialize scroll reveal
    initScrollReveal();
    
    // Initialize skill bars
    initSkillBars();
    
    // Initialize stat counters
    initStatCounters();
    
    // Initialize form validation
    if (contactForm) {
        initFormValidation();
    }
    
    // Event listeners
    mobileToggle.addEventListener('click', toggleMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);
    themeToggle.addEventListener('click', toggleTheme);
    scrollTopBtn.addEventListener('click', scrollToTop);
    
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', filterProjects);
    });
    
    // Scroll events with throttling
    window.addEventListener('scroll', throttle(() => {
        handleNavbarScroll();
        highlightActiveSection();
        updateScrollProgress();
        handleScrollTopButton();
    }, 100));
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Initial calls
    handleNavbarScroll();
    highlightActiveSection();
    updateScrollProgress();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// ADDITIONAL CSS ANIMATIONS (injected via JS)
// ============================================

const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Loading state for buttons */
    .btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    /* Success/Error shake animation */
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .form-input.error {
        animation: shake 0.5s ease;
    }
    
    /* Project card hover enhancement */
    .project-card {
        will-change: transform;
    }
    
    /* Smooth image loading */
    img {
        transition: opacity 0.3s ease;
    }
    
    img[loading] {
        opacity: 0;
    }
    
    img.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(additionalStyles);

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #94a3b8;');
console.log('%cFeel free to connect with me on LinkedIn or GitHub!', 'font-size: 12px; color: #64748b;');
