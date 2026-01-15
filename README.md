<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Inqor Pharmaceuticals - Modern pharmaceutical solutions for neurology, psychiatry, orthopedics, and women's health. Quality medicines for better lives.">
    <meta name="keywords" content="pharmaceuticals, neurology, psychiatry, orthopedics, women's health, medicines, healthcare">
    <meta name="author" content="Inqor Pharmaceuticals">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Inqor Pharmaceuticals - Adding Colors to Life">
    <meta property="og:description" content="Modern pharmaceutical solutions for better health outcomes">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://inqorpharmaceuticals.com">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="images/inquor-logo.png">
    
    <!-- Modern CSS Framework -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="styles/modern.css">
    
    <title>Inqor Pharmaceuticals - Adding Colors to Life</title>
</head>
<body>
    <!-- Loading Screen -->
    <div id="loading-screen" class="loading-screen">
        <div class="loading-spinner">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading Inqor Pharmaceuticals...</p>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm" id="mainNavbar">
        <div class="container">
            <a class="navbar-brand" href="#home">
                <img src="images/inquor-logo.png" alt="Inqor Pharmaceuticals" height="50" class="logo">
            </a>
            
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            About Us
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#about">Our Story</a></li>
                            <li><a class="dropdown-item" href="#mission">Mission & Vision</a></li>
                            <li><a class="dropdown-item" href="#leadership">Leadership</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            Products
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="products-modern.html">All Products</a></li>
                            <li><a class="dropdown-item" href="products-modern.html#neurology">Neurology</a></li>
                            <li><a class="dropdown-item" href="products-modern.html#psychiatry">Psychiatry</a></li>
                            <li><a class="dropdown-item" href="products-modern.html#orthopedics">Orthopedics</a></li>
                            <li><a class="dropdown-item" href="products-modern.html#womens-health">Women's Health</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="PDF/webpdf.pdf" target="_blank">Catalog</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#quality">Quality</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#careers">Careers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
                <!-- Search Button -->
                <button class="btn btn-outline-success ms-3" data-bs-toggle="modal" data-bs-target="#searchModal">
                    <i class="fas fa-search"></i>
                </button>
                
                <!-- Dark Mode Toggle -->
                <button class="btn btn-outline-success ms-2" id="darkModeToggle" title="Toggle Dark Mode">
                    <i class="fas fa-moon" id="darkModeIcon"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <div class="container">
            <div class="row align-items-center min-vh-100">
                <div class="col-lg-7">
                    <div class="hero-content">
                        <div class="hero-badge">
                            <span class="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                                <i class="fas fa-star me-2"></i>Trusted Since 2020
                            </span>
                        </div>
                        <h1 class="hero-title animate-fade-up">Welcome to<br><span class="text-success">Inqor Pharmaceuticals</span></h1>
                        <p class="hero-subtitle animate-fade-up delay-1">Adding Colors to Life Through Innovation</p>
                        <p class="hero-description animate-fade-up delay-2">Transforming healthcare with cutting-edge pharmaceutical solutions across neurology, psychiatry, orthopedics, and women's health.</p>
                        <div class="hero-buttons animate-fade-up delay-2">
                            <a href="products-modern.html" class="btn btn-success btn-lg me-3">
                                <i class="fas fa-pills me-2"></i>Explore Products
                            </a>
                            <a href="#about" class="btn btn-outline-success btn-lg">
                                <i class="fas fa-info-circle me-2"></i>Learn More
                            </a>
                        </div>
                        <div class="hero-stats mt-5">
                            <div class="row g-4">
                                <div class="col-4">
                                    <div class="stat-item">
                                        <h3 class="stat-number text-success">50+</h3>
                                        <p class="stat-label">Products</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat-item">
                                        <h3 class="stat-number text-success">5+</h3>
                                        <p class="stat-label">Therapeutic Areas</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat-item">
                                        <h3 class="stat-number text-success">2020</h3>
                                        <p class="stat-label">Established</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="hero-image-container">
                        <div class="hero-image-wrapper">
                            <img src="images/pic6.jpg" alt="Pharmaceutical Innovation" class="hero-main-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Background Elements -->
        <div class="hero-bg-elements">
            <div class="bg-circle circle-1"></div>
            <div class="bg-circle circle-2"></div>
            <div class="bg-circle circle-3"></div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-3" style="padding-top: 2rem !important; padding-bottom: 2rem !important; position: relative; overflow: hidden;">
        <div class="container">
            <div class="row g-3" style="margin: 0;">
                <div class="col-md-6 col-lg-3">
                    <div class="feature-card text-center floating-card" style="padding: 1.5rem; margin-bottom: 0; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.05);">
                        <div class="feature-icon floating-icon" style="margin-bottom: 0.8rem;">
                            <img src="images/shield.png" alt="Genuine Medicines" class="img-fluid" style="max-height: 60px;">
                        </div>
                        <h6 class="feature-title" style="font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 600;">Genuine Medicines</h6>
                        <p class="feature-text" style="font-size: 0.9rem; margin-bottom: 0;">100% authentic pharmaceutical products</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="feature-card text-center floating-card" style="padding: 1.5rem; margin-bottom: 0; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.05);">
                        <div class="feature-icon floating-icon" style="margin-bottom: 0.8rem;">
                            <img src="images/delivery-truck.png" alt="Timely Delivery" class="img-fluid" style="max-height: 60px;">
                        </div>
                        <h6 class="feature-title" style="font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 600;">Timely Delivery</h6>
                        <p class="feature-text" style="font-size: 0.9rem; margin-bottom: 0;">Fast and reliable distribution network</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="feature-card text-center floating-card" style="padding: 1.5rem; margin-bottom: 0; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.05);">
                        <div class="feature-icon floating-icon" style="margin-bottom: 0.8rem;">
                            <i class="fas fa-microscope fa-2x text-primary"></i>
                        </div>
                        <h6 class="feature-title" style="font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 600;">Research & Development</h6>
                        <p class="feature-text" style="font-size: 0.9rem; margin-bottom: 0;">Innovative therapeutic solutions</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="feature-card text-center floating-card" style="padding: 1.5rem; margin-bottom: 0; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.05);">
                        <div class="feature-icon floating-icon" style="margin-bottom: 0.8rem;">
                            <i class="fas fa-award fa-2x text-primary"></i>
                        </div>
                        <h6 class="feature-title" style="font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 600;">Quality Certified</h6>
                        <p class="feature-text" style="font-size: 0.9rem; margin-bottom: 0;">ISO certified manufacturing processes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section py-5 bg-light">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="about-content">
                        <h2 class="section-title" style="position: relative; border: none !important; text-decoration: none !important; background: none !important;">About Inqor Pharmaceuticals</h2>
                        <div style="display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; width: 0 !important; overflow: hidden !important;"></div>
                        <p class="lead">Established in 2020 with a vision to transform healthcare through innovative pharmaceutical solutions.</p>
                        <p>INQOR PHARMACEUTICALS PVT. LTD. was launched with a focus on CNS range of products, specializing in Neurology, Psychiatry, Orthopedics, Rheumatology, Women's health, and metabolic disorders.</p>
                        <p>We are a vibrant & successful pharmaceutical company driven by passion and singular focus of marketing innovative products & novel therapeutic concepts to help patients live healthier lives.</p>
                        <div class="about-stats mt-4">
                            <div class="row g-3">
                                <div class="col-4">
                                    <div class="stat-item text-center">
                                        <h3 class="stat-number text-primary">50+</h3>
                                        <p class="stat-label">Products</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat-item text-center">
                                        <h3 class="stat-number text-primary">5+</h3>
                                        <p class="stat-label">Therapeutic Areas</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat-item text-center">
                                        <h3 class="stat-number text-primary">2020</h3>
                                        <p class="stat-label">Established</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="about-image text-center">
                        <img src="images/pic2.jpg" alt="About Inqor Pharmaceuticals" class="img-fluid rounded shadow" style="max-width: 280px; height: auto;">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quality Section -->
    <section id="quality" class="quality-section py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title" style="position: relative; border: none !important; text-decoration: none !important; background: none !important;">Quality Assurance</h2>
                <div style="display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; width: 0 !important; overflow: hidden !important;"></div>
                <p class="section-subtitle">Our commitment to excellence in pharmaceutical manufacturing</p>
            </div>
            
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="quality-image">
                        <img src="images/quality1.jpg" alt="Quality Assurance" class="img-fluid rounded shadow">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="quality-content">
                        <h3 class="mb-4">Trusted and Innovative Medicines</h3>
                        <p class="lead">INQOR's vision is to provide trusted and innovative medicines that help people to lead healthier lives.</p>
                        
                        <div class="quality-points">
                            <div class="quality-point">
                                <div class="quality-icon">
                                    <i class="fas fa-certificate text-primary"></i>
                                </div>
                                <div class="quality-text">
                                    <h5>WHO CGMP Certification</h5>
                                    <p>Our products are manufactured under Good Quality & WHO CGMP certification standards.</p>
                                </div>
                            </div>
                            
                            <div class="quality-point">
                                <div class="quality-icon">
                                    <i class="fas fa-shield-alt text-primary"></i>
                                </div>
                                <div class="quality-text">
                                    <h5>Quality & Trust</h5>
                                    <p>INQOR believes in Quality & Trust. Our passion towards quality goes beyond business.</p>
                                </div>
                            </div>
                            
                            <div class="quality-point">
                                <div class="quality-icon">
                                    <i class="fas fa-check-circle text-primary"></i>
                                </div>
                                <div class="quality-text">
                                    <h5>Regulatory Compliance</h5>
                                    <p>All products satisfy the norms of regulatory bodies and international standards.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="quality-stats mt-4">
                            <div class="row g-3">
                                <div class="col-4">
                                    <div class="stat-item text-center">
                                        <h3 class="stat-number text-primary">100%</h3>
                                        <p class="stat-label">Quality Assured</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat-item text-center">
                                        <h3 class="stat-number text-primary">WHO</h3>
                                        <p class="stat-label">CGMP Certified</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat-item text-center">
                                        <h3 class="stat-number text-primary">ISO</h3>
                                        <p class="stat-label">Certified</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-subtitle">We're here to help with all your pharmaceutical needs</p>
            </div>
            
            <div class="row g-5">
                <div class="col-lg-8">
                    <div class="contact-form-wrapper">
                        <form id="contactForm" class="contact-form">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Full Name *</label>
                                    <input type="text" class="form-control" id="name" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email Address *</label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control" id="phone">
                                </div>
                                <div class="col-md-6">
                                    <label for="inquiryType" class="form-label">Type of Inquiry *</label>
                                    <select class="form-select" id="inquiryType" required>
                                        <option value="">Select inquiry type</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="business">Business Partnership</option>
                                        <option value="career">Career Opportunities</option>
                                        <option value="product">Product Information</option>
                                        <option value="support">Technical Support</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="subject" class="form-label">Subject *</label>
                                    <input type="text" class="form-control" id="subject" required>
                                </div>
                                <div class="col-12">
                                    <label for="message" class="form-label">Message *</label>
                                    <textarea class="form-control" id="message" rows="5" required></textarea>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-success btn-lg">
                                        <i class="fas fa-paper-plane me-2"></i>Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h6>Registered Address</h6>
                                <p>124/1, Second Floor<br>
                                Vittal Nagar, Vasantapur<br>
                                Uttarahalli Hobli<br>
                                Bangalore-560078<br>
                                Karnataka, INDIA</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h6>Email</h6>
                                <p><a href="mailto:support@inqorpharmaceuticals.in">support@inqorpharmaceuticals.in</a></p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <h6>Phone</h6>
                                <p><a href="tel:+916303039885">+91 6303039885</a></p>
                            </div>
                        </div>
                        
                        <div class="social-links mt-4">
                            <h6>Follow Us</h6>
                            <div class="social-icons">
                                <a href="https://www.facebook.com/inqorpharmaceuticals" target="_blank" class="social-icon facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/inqorpharmaceuticals" target="_blank" class="social-icon instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.twitter.com/inqorpharma" target="_blank" class="social-icon twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/inqor-pharmaceuticals" target="_blank" class="social-icon linkedin">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Modern Map Section -->
            <div class="map-section mt-5" style="border: 2px solid #e0e0e0; border-radius: 10px; padding: 20px; margin: 30px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div class="row g-0">
                    <div class="col-lg-7">
                        <div class="modern-map-container">
                            <div class="map-overlay d-lg-block d-none">
                                <div class="map-info">
                                    <div class="map-marker">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="map-details">
                                        <h5>Visit Our Office</h5>
                                        <p>Bangalore, Karnataka</p>
                                        <button class="btn btn-success btn-sm" onclick="openDirections()">
                                            <i class="fas fa-directions me-1"></i>Directions
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <iframe 
                                id="modernMap"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.069267394562!2d77.55147961482126!3d12.903267490900731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzExLjgiTiA3N8KwMzMnMTMuMiJF!5e0!3m2!1sen!2sin!4v1609775458383!5m2!1sen!2sin&maptype=roadmap&zoom=15" 
                                width="100%" 
                                height="500" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="map-sidebar">
                            <div class="location-card">
                                <div class="location-header">
                                    <i class="fas fa-building text-primary"></i>
                                    <h5>Head Office</h5>
                                </div>
                                <div class="location-details">
                                    <div class="detail-item">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <div>
                                            <strong>Address</strong>
                                            <p>124/1, Second Floor<br>
                                            Vittal Nagar, Vasantapur<br>
                                            Uttarahalli Hobli<br>
                                            Bangalore-560078<br>
                                            Karnataka, INDIA</p>
                                        </div>
                                    </div>
                                    <div class="detail-item">
                                        <i class="fas fa-clock"></i>
                                        <div>
                                            <strong>Business Hours</strong>
                                            <p>Monday - Friday: 9:00 AM - 6:00 PM<br>
                                            Saturday: 9:00 AM - 2:00 PM<br>
                                            Sunday: Closed</p>
                                        </div>
                                    </div>
                                    <div class="detail-item">
                                        <i class="fas fa-phone"></i>
                                        <div>
                                            <strong>Phone</strong>
                                            <p><a href="tel:+916303039885">+91 6303039885</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="location-actions">
                                    <button class="btn btn-outline-primary btn-sm" onclick="toggleMapView()">
                                        <i class="fas fa-satellite me-1"></i>Satellite
                                    </button>
                                    <button class="btn btn-outline-primary btn-sm" onclick="openStreetView()">
                                        <i class="fas fa-street-view me-1"></i>Street View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer bg-dark text-light py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4">
                    <div class="footer-brand">
                        <img src="images/inquor-logo.png" alt="Inqor Pharmaceuticals" height="60" class="mb-3">
                        <p>Adding colors to life through innovative pharmaceutical solutions and quality healthcare products.</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h6 class="footer-title">Company</h6>
                    <ul class="footer-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#quality">Quality</a></li>
                        <li><a href="#careers">Careers</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h6 class="footer-title">Products</h6>
                    <ul class="footer-links">
                        <li><a href="products-modern.html#neurology">Neurology</a></li>
                        <li><a href="products-modern.html#psychiatry">Psychiatry</a></li>
                        <li><a href="products-modern.html#orthopedics">Orthopedics</a></li>
                        <li><a href="products-modern.html#womens-health">Women's Health</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h6 class="footer-title">Support</h6>
                    <ul class="footer-links">
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#support">Support</a></li>
                        <li><a href="#downloads">Downloads</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h6 class="footer-title">Legal</h6>
                    <ul class="footer-links">
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#compliance">Compliance</a></li>
                        <li><a href="#disclaimer">Disclaimer</a></li>
                    </ul>
                </div>
            </div>
            
            <hr class="footer-divider my-4">
            
            <div class="row align-items-center">
                <div class="col-md-6">
                    <p class="copyright mb-0">&copy; 2024 Inqor Pharmaceuticals Pvt. Ltd. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <div class="social-icons">
                        <a href="https://www.facebook.com/inqorpharmaceuticals" target="_blank" class="social-icon facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/inqorpharmaceuticals" target="_blank" class="social-icon instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com/inqorpharma" target="_blank" class="social-icon twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/inqor-pharmaceuticals" target="_blank" class="social-icon linkedin">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Search Modal -->
    <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">Search</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="search-form">
                        <input type="text" class="form-control form-control-lg" placeholder="Search products, information..." id="searchInput">
                        <div class="search-results mt-3" id="searchResults">
                            <!-- Search results will be populated here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Back to Top Button -->
    <button class="back-to-top" id="backToTop">
        <i class="fas fa-chevron-up"></i>
    </button>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="scripts/modern.js"></script>
</body>
</html>
