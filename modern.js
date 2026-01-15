// Modern JavaScript for Inqor Pharmaceuticals Website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
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
    
    // Special handling for contact icons
    const contactIcons = document.querySelectorAll('.contact-icon i');
    contactIcons.forEach(icon => {
        icon.style.display = 'block';
        icon.style.visibility = 'visible';
        icon.style.opacity = '1';
        icon.style.color = 'white';
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

// Initialize all website functionality
function initializeWebsite() {
    hideLoadingScreen();
    initializeNavigation();
    initializeScrollEffects();
    initializeContactForm();
    initializeSearch();
    initializeAnimations();
    initializeBackToTop();
    initializeModernMap();
    initializeDarkMode();
}

// Hide loading screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
}

// Navigation functionality
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
    
    // Active link highlighting
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
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
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
    const animateElements = document.querySelectorAll('.feature-card, .category-card, .contact-item, .stat-item');
    animateElements.forEach(el => observer.observe(el));
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            inquiryType: document.getElementById('inquiryType').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (validateContactForm(data)) {
            submitContactForm(data);
        }
    });
    
    // Real-time validation
    const requiredFields = ['name', 'email', 'inquiryType', 'subject', 'message'];
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', () => validateField(field));
            field.addEventListener('input', () => clearFieldError(field));
        }
    });
}

function validateContactForm(data) {
    let isValid = true;
    
    // Name validation
    if (!data.name.trim()) {
        showFieldError('name', 'Name is required');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Inquiry type validation
    if (!data.inquiryType) {
        showFieldError('inquiryType', 'Please select an inquiry type');
        isValid = false;
    }
    
    // Subject validation
    if (!data.subject.trim()) {
        showFieldError('subject', 'Subject is required');
        isValid = false;
    }
    
    // Message validation
    if (!data.message.trim()) {
        showFieldError('message', 'Message is required');
        isValid = false;
    } else if (data.message.trim().length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldId = field.id;
    
    clearFieldError(field);
    
    switch (fieldId) {
        case 'name':
            if (!value) {
                showFieldError(fieldId, 'Name is required');
                return false;
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                showFieldError(fieldId, 'Email is required');
                return false;
            } else if (!emailRegex.test(value)) {
                showFieldError(fieldId, 'Please enter a valid email address');
                return false;
            }
            break;
        case 'subject':
            if (!value) {
                showFieldError(fieldId, 'Subject is required');
                return false;
            }
            break;
        case 'message':
            if (!value) {
                showFieldError(fieldId, 'Message is required');
                return false;
            } else if (value.length < 10) {
                showFieldError(fieldId, 'Message must be at least 10 characters long');
                return false;
            }
            break;
    }
    
    return true;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    field.classList.add('is-invalid');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('is-invalid');
    const errorMessage = field.parentNode.querySelector('.invalid-feedback');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function submitContactForm(data) {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        showNotification('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // In a real application, you would send the data to your server here
        console.log('Form submitted:', data);
    }, 2000);
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) return;
    
    // Sample search data (in a real app, this would come from an API)
    const searchData = [
        { title: 'COGNI-LC SYRUP', category: 'Neurology', description: 'Cognitive enhancement syrup for neurological support' },
        { title: 'UTRABENZ GEL', category: 'Orthopedics', description: 'Topical gel for joint and muscle pain relief' },
        { title: 'BENFOQOR CD3', category: 'Orthopedics', description: 'Advanced orthopedic care solution' },
        { title: 'PREGAQOR 25MG', category: 'Psychiatry', description: 'Psychiatric medication for anxiety management' },
        { title: 'PREGAQOR 50MG', category: 'Psychiatry', description: 'Higher strength psychiatric medication' },
        { title: 'COGNIADD', category: 'Neurology', description: 'Cognitive support supplement' },
        { title: 'VERTIQUIT 16MG', category: 'Neurology', description: 'Vertigo and balance disorder treatment' },
        { title: 'VERTIQUIT 24MG', category: 'Neurology', description: 'Higher strength vertigo treatment' },
        { title: 'About Us', category: 'Company', description: 'Learn about Inqor Pharmaceuticals history and mission' },
        { title: 'Quality Assurance', category: 'Company', description: 'Our commitment to pharmaceutical quality' },
        { title: 'Careers', category: 'Company', description: 'Join our team of healthcare professionals' },
        { title: 'Contact Us', category: 'Company', description: 'Get in touch with our team' }
    ];
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const results = searchData.filter(item => 
            item.title.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        
        displaySearchResults(results, query);
    });
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="text-muted">No results found for "' + query + '"</p>';
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

// Animation initialization
function initializeAnimations() {
    // Add staggered animation delays to cards
    const cards = document.querySelectorAll('.feature-card, .category-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
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

// Performance optimization
const debouncedScrollHandler = debounce(updateActiveNavLink, 100);
window.addEventListener('scroll', debouncedScrollHandler);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content with keyboard
    if (e.key === 'Tab' && e.shiftKey === false) {
        const focusableElements = document.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        
        // Add focus indicators for keyboard navigation
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--primary-color)';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }
});

// Modern Map functionality
let currentMapView = 'roadmap';

function openDirections() {
    const address = "124/1, Second Floor, Vittal Nagar, Vasantapur, Uttarahalli Hobli, Bangalore-560078, Karnataka, INDIA";
    const encodedAddress = encodeURIComponent(address);
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(directionsUrl, '_blank');
}

function toggleMapView() {
    const mapFrame = document.getElementById('modernMap');
    const button = event.target.closest('button');
    
    if (currentMapView === 'roadmap') {
        // Switch to satellite view
        const currentSrc = mapFrame.src;
        const newSrc = currentSrc.replace('maptype=roadmap', 'maptype=satellite');
        mapFrame.src = newSrc;
        currentMapView = 'satellite';
        button.innerHTML = '<i class="fas fa-map me-1"></i>Road Map';
        button.classList.remove('btn-outline-primary');
        button.classList.add('btn-primary');
    } else {
        // Switch to roadmap view
        const currentSrc = mapFrame.src;
        const newSrc = currentSrc.replace('maptype=satellite', 'maptype=roadmap');
        mapFrame.src = newSrc;
        currentMapView = 'roadmap';
        button.innerHTML = '<i class="fas fa-satellite me-1"></i>Satellite';
        button.classList.remove('btn-primary');
        button.classList.add('btn-outline-primary');
    }
}

function openStreetView() {
    // Open Google Street View for the location
    const lat = 12.903267490900731;
    const lng = 77.55147961482126;
    const streetViewUrl = `https://www.google.com/maps/@${lat},${lng},3a,75y,90t/data=!3m6!1e1!3m4!1s0x0:0x0!2e0!7i13312!8i6656`;
    window.open(streetViewUrl, '_blank');
}

// Map loading animation
function initializeModernMap() {
    const mapContainer = document.querySelector('.modern-map-container');
    const mapFrame = document.getElementById('modernMap');
    
    if (mapFrame) {
        mapFrame.addEventListener('load', function() {
            mapContainer.classList.add('loaded');
        });
        
        // Add loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'map-loading';
        loadingIndicator.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading map...</span>
                </div>
                <p class="mt-2">Loading interactive map...</p>
            </div>
        `;
        mapContainer.appendChild(loadingIndicator);
        
        // Remove loading indicator after map loads
        setTimeout(() => {
            if (loadingIndicator.parentNode) {
                loadingIndicator.remove();
            }
        }, 3000);
    }
}

// Export functions for global access
window.openDirections = openDirections;
window.toggleMapView = toggleMapView;
window.openStreetView = openStreetView;

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

// Export functions for global access
window.toggleTheme = toggleTheme;
window.getCurrentTheme = getCurrentTheme;
window.setTheme = setTheme;