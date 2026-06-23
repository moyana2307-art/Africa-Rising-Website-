document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Smooth Scroll for Navigation Links
    // ==========================================
    const navLinks = document.querySelectorAll('header .navigation-items a, .footer-links a, .brand');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only scroll smoothly if it's an internal ID anchor
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==========================================
    // 2. Sticky Header / Navbar Blur Effect
    // ==========================================
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Adds a shadow and dark translucent background after scrolling 50px
        if (window.scrollY > 50) {
            header.style.background = 'rgba(26, 26, 26, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
            header.style.position = 'fixed'; // Keeps it pinned to the top
        } else {
            header.style.background = 'transparent';
            header.style.boxShadow = 'none';
            header.style.position = 'absolute'; // Reverts to original layout
        }
    });

    // ==========================================
    // 3. Contact Form Submission Handler
    // ==========================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload
            
            // Grab input values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const submitBtn = contactForm.querySelector('.contact-btn');

            // Basic Client-Side Validation
            if (!name || !email || !message) {
                alert('Please fill out all fields before submitting.');
                return;
            }

            // Visual feedback for simulated submission
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Success State
                alert(`Thank you, ${name}! Your booking inquiry has been successfully sent.`);
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500); // 1.5-second simulated server delay
        });
    }
});