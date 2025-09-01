// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Buengx Test Site loaded successfully!');
    
    // Test button functionality
    const testButton = document.getElementById('testButton');
    const statusElement = document.querySelector('.status-indicator');
    
    if (testButton) {
        testButton.addEventListener('click', function() {
            // Change button text temporarily
            const originalText = testButton.textContent;
            testButton.textContent = 'Testing...';
            testButton.disabled = true;
            
            // Simulate a test action
            setTimeout(() => {
                testButton.textContent = 'Test Complete!';
                testButton.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
                
                // Update status
                if (statusElement) {
                    statusElement.textContent = 'Test Successful';
                    statusElement.style.color = '#27ae60';
                }
                
                // Reset after 3 seconds
                setTimeout(() => {
                    testButton.textContent = originalText;
                    testButton.disabled = false;
                    testButton.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    
                    if (statusElement) {
                        statusElement.textContent = 'Active';
                        statusElement.style.color = '#27ae60';
                    }
                }, 3000);
            }, 1500);
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add some dynamic content
    const currentTime = new Date().toLocaleString();
    console.log(`Site loaded at: ${currentTime}`);
    
    // Simple animation for elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content sections for animation
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Display some basic site info in console for debugging
    console.log('=== Buengx Test Site Debug Info ===');
    console.log('URL:', window.location.href);
    console.log('User Agent:', navigator.userAgent);
    console.log('Screen Resolution:', `${screen.width}x${screen.height}`);
    console.log('Viewport Size:', `${window.innerWidth}x${window.innerHeight}`);
    console.log('=====================================');
});