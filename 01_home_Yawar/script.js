// ============================================
// SYSTEMS LIMITED CLONE - BASE JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVBAR SCROLL EFFECT - Dynamic Color Change
    // ============================================
    const navbar = document.getElementById('mainNavbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll);
    
    // ============================================
    // SEARCH OVERLAY FUNCTIONALITY
    // ============================================
    const searchBtn = document.getElementById('searchBtn');
    const heroSearchBtn = document.getElementById('heroSearchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.querySelector('.search-input');
    
    function openSearch() {
        searchOverlay.classList.add('active');
        setTimeout(() => {
            searchInput.focus();
        }, 400);
    }

    function closeSearchOverlay() {
        searchOverlay.classList.remove('active');
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openSearch();
        });
    }

    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openSearch();
        });
    }
    
    if (closeSearch) {
        closeSearch.addEventListener('click', closeSearchOverlay);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearchOverlay();
        }
    });
    
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            closeSearchOverlay();
        }
    });
    
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
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
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
});

// ============================================
// Yawar - Home Page Specific JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // ============================================
    // SCROLL TO TOP BUTTON
    // ============================================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============================================
    // SERVICE CARD HOVER EFFECT
    // ============================================
    const serviceCards = document.querySelectorAll('.service-intro-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ============================================
    // INSIGHT CARD HOVER EFFECT
    // ============================================
    const insightCards = document.querySelectorAll('.insight-card');
    insightCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ============================================
    // STATS COUNTER ANIMATION
    // ============================================
    const stats = [
        { element: document.querySelectorAll('.stat-number')[0], target: 48, duration: 2000 },
        { element: document.querySelectorAll('.stat-number')[1], target: 7700, duration: 2000 },
        { element: document.querySelectorAll('.stat-number')[2], target: 16, duration: 2000 },
        { element: document.querySelectorAll('.stat-number')[3], target: 300, duration: 2000 }
    ];

    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            statsAnimated = true;

            stats.forEach((stat, index) => {
                const element = stat.element;
                const target = stat.target;
                const duration = stat.duration;
                const increment = target / (duration / 16);
                let current = 0;

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        element.textContent = target;
                        clearInterval(counter);
                    } else {
                        element.textContent = Math.floor(current);
                    }
                }, 16);
            });
        }
    }

    window.addEventListener('scroll', animateStats);
    window.addEventListener('load', animateStats);

    // ============================================
    // PARALLAX EFFECT FOR TEAM IMAGE
    // ============================================
    const teamImage = document.querySelector('.team-image');
    if (teamImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const elementOffset = teamImage.offsetTop;
            const windowHeight = window.innerHeight;

            if (scrolled + windowHeight > elementOffset) {
                const yPos = (scrolled + windowHeight - elementOffset) * 0.5;
                teamImage.style.transform = `translateY(${yPos * 0.1}px)`;
            }
        });
    }

    // ============================================
    // SMOOTH PAGE LOAD ANIMATION
    // ============================================
    document.body.style.opacity = '1';

    // ============================================
    // LAZY LOAD IMAGES
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // HERO SECTION FADE ON SCROLL
    // ============================================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = document.querySelector('.hero-section').offsetHeight;
            const opacity = Math.max(0, 1 - scrolled / (heroHeight / 2));
            heroContent.style.opacity = opacity;
        });
    }

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
});

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

// ============================================
// PAGE TRANSITION EFFECTS
// ============================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    initScrollAnimations();
});



const button = document.getElementById("alertbtn");

button.addEventListener("click",function(){
    alert("Hello BHAI SAAB");
});