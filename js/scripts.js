// Simple JavaScript for smooth scrolling and basic interactivity
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Show back-to-top button when scrolling down
    window.addEventListener('scroll', function() {
        const backToTopButton = document.querySelector('.back-to-top');
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Highlight active section in navbar
    const sections = document.querySelectorAll('section');
    const navLinksObserver = document.querySelectorAll('.nav-link'); // Renamed to avoid conflict

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (entry.isIntersecting) {
                navLinksObserver.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        console.log(`Observing section: ${section.id}`); // Log each section being observed
        observer.observe(section);
    });
});
// end
