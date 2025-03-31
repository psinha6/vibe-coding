// Tech Blogging Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile nav toggle
  const createMobileMenu = () => {
    const header = document.querySelector('.header');
    
    // Only create if it doesn't exist and on mobile screens
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-nav-toggle')) {
      const navList = document.querySelector('.nav-list');
      
      // Create mobile toggle button
      const mobileToggle = document.createElement('button');
      mobileToggle.className = 'mobile-nav-toggle';
      mobileToggle.innerHTML = '<span></span><span></span><span></span>';
      
      // Add toggle functionality
      mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileToggle.classList.toggle('active');
      });
      
      // Add to DOM
      const headerContent = document.querySelector('.header-content');
      headerContent.insertBefore(mobileToggle, navList);
      
      // Add styles dynamically
      const style = document.createElement('style');
      style.textContent = `
        .mobile-nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 30px;
          height: 24px;
          position: relative;
          z-index: 20;
        }
        
        .mobile-nav-toggle span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--charcoal-400);
          margin: 5px 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .mobile-nav-toggle.active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        
        .mobile-nav-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-nav-toggle.active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        
        @media (max-width: 768px) {
          .mobile-nav-toggle {
            display: block;
          }
          
          .nav-list {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--neutral-white);
            flex-direction: column;
            align-items: center;
            padding: 0;
            height: 0;
            overflow: hidden;
            transition: height 0.3s ease;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          }
          
          .nav-list.active {
            height: auto;
            padding: 1rem 0;
          }
          
          .nav-item {
            width: 100%;
            text-align: center;
            margin: 0.5rem 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };

  // Initialize mobile menu
  createMobileMenu();
  
  // Update on resize
  window.addEventListener('resize', createMobileMenu);

  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // Simulate form submission (would be replaced with actual API call)
        emailInput.value = '';
        
        // Show success message
        const successMessage = document.createElement('p');
        successMessage.className = 'newsletter-success';
        successMessage.textContent = 'Thank you for subscribing!';
        successMessage.style.color = 'var(--green-400)';
        successMessage.style.marginTop = '1rem';
        
        // Remove existing success message if any
        const existingMessage = document.querySelector('.newsletter-success');
        if (existingMessage) {
          existingMessage.remove();
        }
        
        // Add message to DOM
        newsletterForm.appendChild(successMessage);
        
        // Remove message after 3 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 3000);
      }
    });
  }

  // Add animation on scroll for content sections
  const animateOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  };
  
  // Add styles for animations
  const addAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      section.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .expertise-card, .post-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
      }
      
      section.visible .expertise-card,
      section.visible .post-card {
        opacity: 1;
        transform: translateY(0);
      }
      
      section.visible .expertise-card:nth-child(2),
      section.visible .post-card:nth-child(2) {
        transition-delay: 0.2s;
      }
      
      section.visible .expertise-card:nth-child(3),
      section.visible .post-card:nth-child(3) {
        transition-delay: 0.4s;
      }
      
      section.visible .expertise-card:nth-child(4) {
        transition-delay: 0.6s;
      }
    `;
    document.head.appendChild(style);
  };
  
  // Initialize animation styles
  addAnimationStyles();
  
  // Check for animations on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
}); 