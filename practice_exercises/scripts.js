document.addEventListener('DOMContentLoaded', function() {
    // Toggle Navigation Menu on Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling to Sections
    const smoothScrollLinks = document.querySelectorAll('nav ul li a');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed navbar
                behavior: 'smooth'
            });

            // Close menu on mobile after clicking
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
});
