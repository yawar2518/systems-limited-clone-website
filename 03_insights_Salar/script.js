// ============================================
// SYSTEMS LIMITED CLONE - BASE JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVBAR SCROLL EFFECT - Dynamic Color Change
    // ============================================
    const navbar = document.getElementById('mainNavbar');
    const logoWhite = document.getElementById('logoWhite');
    const logoDark = document.getElementById('logoDark');
    
    let ticking = false;
    
    function handleNavbarScroll() {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        ticking = false;
    }
    
    function requestScroll() {
        if (!ticking) {
            window.requestAnimationFrame(handleNavbarScroll);
            ticking = true;
        }
    }
    
    // Initial check
    if (navbar) {
        handleNavbarScroll();
        // Listen for scroll with throttling
        window.addEventListener('scroll', requestScroll, { passive: true });
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
    
});

// ============================================
// Salar - Insights Page Specific JavaScript
// ============================================

    // ============================================
    // BLOG FILTER FUNCTIONALITY
    // ============================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter blog cards
            blogCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.3s ease-in-out';
                } else if (card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.3s ease-in-out';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ============================================
    // LOAD MORE FUNCTIONALITY
    // ============================================
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real app, this would load more articles from a server
            alert('More articles would load here! (Connected to a backend)');
        });
    }

    // ============================================
    // NEWSLETTER FORM
    // ============================================
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                alert('Thank you for subscribing with: ' + email);
                emailInput.value = '';
            }
        });
    }

    // ============================================
    // SMOOTH SCROLL TO SECTION
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

;

// ============================================
// CSS Animation for Fade In
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SCROLL ANIMATION - Observe Elements
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[class*="aos-"]');
    
    if (animatedElements.length === 0) return;
    
    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                // Optional: stop observing after animation
                // observer.unobserve(entry.target);
            } else {
                // Uncomment to re-animate on scroll up
                // entry.target.classList.remove('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        if (!card.classList.contains('aos-fade-up')) {
            card.classList.add('aos-fade-up');
        }
    });
    
    // Add animation classes to page header and other sections
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader && !pageHeader.classList.contains('aos-fade-up')) {
        pageHeader.classList.add('aos-fade-up');
    }
    
    const blogFilter = document.querySelector('.blog-filter-section');
    if (blogFilter && !blogFilter.classList.contains('aos-fade-up')) {
        blogFilter.classList.add('aos-fade-up');
    }
    
    const footer = document.querySelector('footer');
    if (footer && !footer.classList.contains('aos-fade-up')) {
        footer.classList.add('aos-fade-up');
    }
    
    // Initialize the observer
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
});

// Re-initialize animations after filter changes
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            initScrollAnimations();
        }, 100);
    });
});
