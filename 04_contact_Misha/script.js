// ============================================
// SYSTEMS LIMITED CLONE - BASE JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Initialize AOS (Animate on Scroll)
    // ============================================
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    // ============================================
    // NAVBAR SCROLL EFFECT - Dynamic Color Change
    // ============================================
    const navbar = document.getElementById('mainNavbar');
    const logoWhite = document.getElementById('logoWhite');
    const logoDark = document.getElementById('logoDark');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (scrollToTopBtn) {
                scrollToTopBtn.classList.add('show');
            }
        } else {
            navbar.classList.remove('scrolled');
            if (scrollToTopBtn) {
                scrollToTopBtn.classList.remove('show');
            }
        }
    }
    
    // Initial check
    handleNavbarScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Scroll to top functionality
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ============================================
    // SEARCH OVERLAY FUNCTIONALITY
    // ============================================
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.querySelector('.search-input');
    
    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            searchOverlay.classList.add('active');
            setTimeout(() => {
                searchInput.focus();
            }, 400);
        });
        
        closeSearch.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
        });
        
        // Close on click outside
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================================
    // DROPDOWN HOVER EFFECT (Desktop)
    // ============================================
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 992) {
                this.querySelector('.dropdown-menu').classList.add('show');
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 992) {
                this.querySelector('.dropdown-menu').classList.remove('show');
            }
        });
    });
    
    // ============================================
    // ACTIVE NAV LINK HIGHLIGHT
    // ============================================
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
    
    // ============================================
    // HERO PARALLAX EFFECT
    // ============================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
        }
    });
    
    // ============================================
    // STATS COUNTER ANIMATION
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;
        
        const sectionTop = statsSection.offsetTop;
        const sectionHeight = statsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionTop + sectionHeight / 2) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                let count = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        stat.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.ceil(count) + '+';
                    }
                }, 30);
            });
            statsAnimated = true;
        }
    }

    window.addEventListener('scroll', animateStats);
    
    // ============================================
    // PROGRESS BAR
    // ============================================
    const createProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.width = '0%';
        progressBar.style.height = '4px';
        progressBar.style.background = 'linear-gradient(90deg, var(--systems-blue), var(--systems-blue-light))';
        progressBar.style.zIndex = '10000';
        progressBar.style.transition = 'width 0.1s ease';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };

    createProgressBar();
    
});

// ============================================
// Misha - Contact Page Specific JavaScript
// ============================================

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            company: document.getElementById('company').value.trim(),
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value.trim()
        };
        
        // Validate form
        let isValid = true;
        
        // Validate required fields
        if (!formData.firstName) {
            showError('firstName', 'First name is required');
            isValid = false;
        }
        
        if (!formData.lastName) {
            showError('lastName', 'Last name is required');
            isValid = false;
        }
        
        if (!formData.email) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!formData.subject) {
            showError('subject', 'Please select a subject');
            isValid = false;
        }
        
        if (!formData.message) {
            showError('message', 'Message is required');
            isValid = false;
        }
        
        // If form is valid, send email via FormSubmit
        if (isValid) {
            // Disable submit button
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // ============================================
            // FormSubmit Email Service
            // ============================================
            // STEP 1: Replace YOUR_EMAIL@example.com with your actual email address
            // STEP 2: First submission will send you a confirmation email - click the link to activate
            // STEP 3: All future submissions will come directly to your inbox!
            
            const YOUR_EMAIL = 'mishashah2003@gmail.com'; // 👈 CHANGE THIS TO YOUR EMAIL!
            
            // Prepare form data
            const formSubmitData = new FormData();
            formSubmitData.append('name', `${formData.firstName} ${formData.lastName}`);
            formSubmitData.append('email', formData.email);
            formSubmitData.append('phone', formData.phone || 'Not provided');
            formSubmitData.append('company', formData.company || 'Not provided');
            formSubmitData.append('subject', formData.subject);
            formSubmitData.append('message', formData.message);
            formSubmitData.append('_subject', `New Contact Form Submission: ${formData.subject}`);
            formSubmitData.append('_captcha', 'false');
            formSubmitData.append('_template', 'table');
            
            // Send email via FormSubmit
            fetch(`https://formsubmit.co/${YOUR_EMAIL}`, {
                method: 'POST',
                body: formSubmitData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success! Show success message
                    successMessage.classList.add('show');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Remove validation classes
                    document.querySelectorAll('.form-control').forEach(input => {
                        input.classList.remove('success', 'error');
                    });
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                    }, 5000);
                    
                    // Scroll to success message
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    
                    console.log('Email sent successfully!');
                } else {
                    throw new Error('Failed to send email');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again or email us directly at info@systemsltd.com');
            })
            .finally(() => {
                // Reset button
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
            });
        }
    });
    
    // Real-time validation on input
    const formInputs = contactForm.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            clearError(this.id);
            
            // Real-time email validation
            if (this.id === 'email' && this.value.trim() !== '') {
                if (isValidEmail(this.value.trim())) {
                    this.classList.add('success');
                    this.classList.remove('error');
                } else {
                    this.classList.add('error');
                    this.classList.remove('success');
                }
            }
        });
        
        // Clear error on focus
        input.addEventListener('focus', function() {
            clearError(this.id);
        });
    });
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show error
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('error');
    field.classList.remove('success');
    
    // Add error message if it doesn't exist
    let errorMsg = field.parentElement.querySelector('.form-error-message');
    if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.className = 'form-error-message';
        field.parentElement.appendChild(errorMsg);
    }
    errorMsg.textContent = message;
    errorMsg.classList.add('show');
}

// Helper function to clear error
function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('error');
    
    const errorMsg = field.parentElement.querySelector('.form-error-message');
    if (errorMsg) {
        errorMsg.classList.remove('show');
    }
}

// Phone number formatting (optional)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        // Format as: +92 XXX XXXXXXX
        if (value.startsWith('92')) {
            if (value.length > 2) {
                value = '+92 ' + value.substring(2);
            }
            if (value.length > 7) {
                value = value.substring(0, 7) + ' ' + value.substring(7);
            }
        }
        
        e.target.value = value;
    });
}

// Smooth scroll to form when clicking contact cards
const contactCardLinks = document.querySelectorAll('.contact-card-link');
contactCardLinks.forEach(link => {
    if (link.getAttribute('href') === '#contactForm') {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('contactForm').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            // Focus on first input
            setTimeout(() => {
                document.getElementById('firstName').focus();
            }, 800);
        });
    }
});

// Enhanced hover effects for contact cards
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced hover effects for feature boxes
const featureBoxes = document.querySelectorAll('.feature-box');
featureBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced hover effects for testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// CTA button hover effect
const ctaBtn = document.querySelector('.btn-cta');
if (ctaBtn) {
    ctaBtn.addEventListener('mouseenter', function() {
        this.innerHTML = 'Let\'s Connect <i class="fas fa-arrow-right ms-2"></i>';
    });
    
    ctaBtn.addEventListener('mouseleave', function() {
        this.innerHTML = 'Start a Conversation <i class="fas fa-arrow-right ms-2"></i>';
    });
}

// Mobile menu enhancement
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
        this.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
                navbarToggler.classList.remove('active');
            }
        });
    });
}

// Typing effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    setTimeout(typeWriter, 1000);
}

// ============================================
// SCROLL ANIMATIONS - Initialize
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[class*="aos-"]');
    
    if (animatedElements.length === 0) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

initScrollAnimations();

// ============================================
// PROGRESS BAR - Scroll Indicator
// ============================================
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '4px';
    progressBar.style.background = 'linear-gradient(90deg, var(--systems-blue), var(--systems-blue-light))';
    progressBar.style.zIndex = '10000';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createProgressBar();

// Console log for debugging
console.log('Contact Page JavaScript Loaded Successfully');
console.log('AOS Initialized');
console.log('Form validation active');