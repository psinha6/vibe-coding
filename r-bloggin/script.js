// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Tag filtering in articles section
    const tagButtons = document.querySelectorAll('.tags-filter .tag');
    const articleCards = document.querySelectorAll('.article-card');

    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tagButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedTag = this.textContent.toLowerCase();
            
            // Show all articles if "All" is selected
            if (selectedTag === 'all') {
                articleCards.forEach(card => {
                    card.style.display = 'block';
                });
                return;
            }
            
            // Filter articles based on selected tag
            articleCards.forEach(card => {
                const cardTags = card.querySelectorAll('.article-tags .tag');
                let hasTag = false;
                
                cardTags.forEach(tag => {
                    if (tag.textContent.toLowerCase() === selectedTag) {
                        hasTag = true;
                    }
                });
                
                card.style.display = hasTag ? 'block' : 'none';
            });
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-container button');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            articleCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        articleCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch();
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    // Contact form submission (mock)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Normally, you'd send this data to a server
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Newsletter subscription (mock)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                alert('Thank you for subscribing to the newsletter!');
                newsletterForm.reset();
            } else {
                alert('Please enter your email address.');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add scroll effect for the header
    const header = document.querySelector('.site-header');
    let lastScrollPosition = 0;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollPosition = currentScrollPosition;
    });

    // Riverty Checkbox Components
    const termsCheckbox = document.querySelector('r-checkbox#terms');
    const newsletterCheckbox = document.querySelector('r-checkbox#newsletter');
    const submitButton = document.querySelector('.contact-form button[type="submit"]');

    if (termsCheckbox && submitButton) {
        termsCheckbox.addEventListener('rChange', function(event) {
            const isChecked = event.detail.checked;
            submitButton.disabled = !isChecked;
        });
    }

    if (newsletterCheckbox) {
        newsletterCheckbox.addEventListener('rChange', function(event) {
            const isChecked = event.detail.checked;
            // You can handle newsletter subscription here
            console.log('Newsletter subscription:', isChecked);
        });
    }
});

// Add a class to indicate when the page is fully loaded
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
}); 