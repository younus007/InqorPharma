// Products Page JavaScript

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeProductsPage();
    ensureFontAwesomeIcons();
});

// Ensure Font Awesome icons are loaded and displayed properly
function ensureFontAwesomeIcons() {
    // Wait for Font Awesome to load
    const checkFontAwesome = () => {
        const testIcon = document.createElement('i');
        testIcon.className = 'fas fa-home';
        testIcon.style.position = 'absolute';
        testIcon.style.left = '-9999px';
        document.body.appendChild(testIcon);
        
        const computedStyle = window.getComputedStyle(testIcon, '::before');
        const content = computedStyle.getPropertyValue('content');
        
        document.body.removeChild(testIcon);
        
        if (content && content !== 'none' && content !== '""') {
            // Font Awesome is loaded
            console.log('Font Awesome loaded successfully');
            return true;
        }
        return false;
    };
    
    // Check if Font Awesome is loaded, if not, retry
    let attempts = 0;
    const maxAttempts = 10;
    
    const retryFontAwesome = () => {
        if (checkFontAwesome() || attempts >= maxAttempts) {
            // Force refresh of all icons
            refreshAllIcons();
            return;
        }
        
        attempts++;
        setTimeout(retryFontAwesome, 500);
    };
    
    // Start checking
    setTimeout(retryFontAwesome, 100);
}

// Force refresh all Font Awesome icons
function refreshAllIcons() {
    const icons = document.querySelectorAll('i[class*="fa-"]');
    icons.forEach(icon => {
        // Force redraw by temporarily changing display
        const originalDisplay = icon.style.display;
        icon.style.display = 'none';
        icon.offsetHeight; // Trigger reflow
        icon.style.display = originalDisplay || 'inline-block';
        
        // Ensure visibility
        icon.style.visibility = 'visible';
        icon.style.opacity = '1';
    });
    
    // Special handling for category icons
    const categoryIcons = document.querySelectorAll('.category-icon-large i');
    categoryIcons.forEach(icon => {
        icon.style.display = 'block';
        icon.style.visibility = 'visible';
        icon.style.opacity = '1';
    });
    
    // Special handling for social icons
    const socialIcons = document.querySelectorAll('.social-icon i');
    socialIcons.forEach(icon => {
        icon.style.display = 'block';
        icon.style.visibility = 'visible';
        icon.style.opacity = '1';
        icon.style.color = 'white';
    });
}

// Initialize products page functionality
function initializeProductsPage() {
    initializeNavigation();
    initializeProductFilter();
    initializeProductSearch();
    initializeBackToTop();
    initializeScrollEffects();
    initializeDarkMode();
}

// Navigation functionality (reused from main site)
function initializeNavigation() {
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Remove active class from all links
                    navLinks.forEach(l => l.classList.remove('active'));
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Product filtering functionality
function initializeProductFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const productCategories = document.querySelectorAll('.product-category');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            if (filter === 'all') {
                // Show all categories
                productCategories.forEach(category => {
                    category.style.display = 'block';
                    animateCategory(category);
                });
            } else {
                // Hide all categories first
                productCategories.forEach(category => {
                    category.style.display = 'none';
                });
                
                // Show only the selected category
                const targetCategory = document.getElementById(filter);
                if (targetCategory) {
                    targetCategory.style.display = 'block';
                    animateCategory(targetCategory);
                    
                    // Scroll to category
                    setTimeout(() => {
                        targetCategory.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            }
        });
    });
}

// Animate category appearance
function animateCategory(category) {
    const cards = category.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Product search functionality
function initializeProductSearch() {
    const searchInput = document.getElementById('productSearch');
    const productCards = document.querySelectorAll('.product-card');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        productCards.forEach(card => {
            const productName = card.querySelector('.product-name').textContent.toLowerCase();
            const productDescription = card.querySelector('.product-description').textContent.toLowerCase();
            const productCategory = card.querySelector('.product-category-tag').textContent.toLowerCase();
            const featureTags = Array.from(card.querySelectorAll('.feature-tag')).map(tag => tag.textContent.toLowerCase());
            
            const searchText = `${productName} ${productDescription} ${productCategory} ${featureTags.join(' ')}`;
            
            if (query === '' || searchText.includes(query)) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show/hide categories based on visible products
        const productCategories = document.querySelectorAll('.product-category');
        productCategories.forEach(category => {
            const visibleCards = category.querySelectorAll('.product-card[style*="display: block"], .product-card:not([style*="display: none"])');
            
            if (query === '') {
                category.style.display = 'block';
            } else if (visibleCards.length > 0) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
        
        // Update filter buttons
        if (query !== '') {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        }
    });
    
    // Clear search when filter buttons are clicked
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            searchInput.value = '';
            // Reset all product visibility
            productCards.forEach(card => {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        });
    });
}

// Back to top button
function initializeBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .category-header, .hero-stats .stat-card');
    animateElements.forEach(el => observer.observe(el));
}

// Product card interactions
document.addEventListener('click', function(e) {
    if (e.target.closest('.product-card .btn')) {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        
        // Show product details modal or navigate to product page
        showProductDetails(productName);
    }
});

// Show product details (placeholder function)
function showProductDetails(productName) {
    // In a real application, this would show a modal or navigate to a detailed product page
    alert(`More details about ${productName} would be shown here.\n\nThis could include:\n- Detailed description\n- Composition\n- Dosage information\n- Side effects\n- Prescribing information`);
}

// Search modal functionality (if using the search modal from main site)
const searchModal = document.getElementById('searchModal');
if (searchModal) {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }
            
            // Search through products
            const productCards = document.querySelectorAll('.product-card');
            const results = [];
            
            productCards.forEach(card => {
                const productName = card.querySelector('.product-name').textContent;
                const productCategory = card.querySelector('.product-category-tag').textContent;
                const productDescription = card.querySelector('.product-description').textContent;
                
                if (productName.toLowerCase().includes(query) || 
                    productCategory.toLowerCase().includes(query) || 
                    productDescription.toLowerCase().includes(query)) {
                    results.push({
                        title: productName,
                        category: productCategory,
                        description: productDescription
                    });
                }
            });
            
            displaySearchResults(results, query);
        });
    }
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="text-muted">No products found for "' + query + '"</p>';
        return;
    }
    
    const resultsHTML = results.map(result => `
        <div class="search-result-item p-3 border-bottom">
            <h6 class="mb-1">${highlightText(result.title, query)}</h6>
            <small class="text-primary">${result.category}</small>
            <p class="mb-0 text-muted small">${highlightText(result.description, query)}</p>
        </div>
    `).join('');
    
    searchResults.innerHTML = resultsHTML;
}

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Utility functions
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

// Performance optimization
const debouncedSearch = debounce(function(query) {
    // Debounced search functionality
}, 300);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error on products page:', e.error);
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
            const modal = bootstrap.Modal.getInstance(openModal);
            if (modal) modal.hide();
        }
    }
    
    // Enter key on filter buttons
    if (e.key === 'Enter' && e.target.classList.contains('filter-btn')) {
        e.target.click();
    }
});

// ===== DARK MODE FUNCTIONALITY =====

// Initialize dark mode
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    if (!darkModeToggle || !darkModeIcon) return;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Add click event listener
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        
        // Add a subtle animation to the button
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', function(e) {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

// Set theme function
function setTheme(theme) {
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update icon
    if (darkModeIcon) {
        if (theme === 'dark') {
            darkModeIcon.className = 'fas fa-sun';
        } else {
            darkModeIcon.className = 'fas fa-moon';
        }
    }
    
    // Save preference
    localStorage.setItem('theme', theme);
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    
    // Update meta theme-color for mobile browsers
    updateMetaThemeColor(theme);
    
    // Show notification for first-time users
    if (!localStorage.getItem('darkModeIntroShown')) {
        setTimeout(() => {
            showNotification(
                `${theme === 'dark' ? 'Dark' : 'Light'} mode activated! You can toggle between themes using the ${theme === 'dark' ? 'sun' : 'moon'} icon in the navigation.`,
                'info'
            );
            localStorage.setItem('darkModeIntroShown', 'true');
        }, 1000);
    }
}

// Update meta theme color for mobile browsers
function updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        document.head.appendChild(metaThemeColor);
    }
    
    if (theme === 'dark') {
        metaThemeColor.content = '#0f172a';
    } else {
        metaThemeColor.content = '#ffffff';
    }
}

// Get current theme
function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}

// Toggle theme function (can be called externally)
function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Auto-detect system preference on first visit
function detectSystemTheme() {
    if (!localStorage.getItem('theme') && window.matchMedia) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }
    return localStorage.getItem('theme') || 'light';
}

// Enhanced theme initialization with system detection
function initializeThemeWithSystemDetection() {
    const theme = detectSystemTheme();
    setTheme(theme);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Export functions for global access
window.toggleTheme = toggleTheme;
window.getCurrentTheme = getCurrentTheme;
window.setTheme = setTheme;