// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    const contactContainer = document.querySelector('.contact-container');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Hide the form
        contactForm.style.display = 'none';

        // Create and display the success message
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Your message has been sent, please wait a while for my response.';
        successMessage.style.color = '#fff'; // White text for visibility on dark theme
        successMessage.style.fontSize = '1.2em';
        successMessage.style.textAlign = 'center';
        successMessage.style.marginTop = '20px';
        successMessage.style.padding = '10px';
        successMessage.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Subtle background
        successMessage.style.borderRadius = '5px';

        // Append the message to the contact container
        contactContainer.appendChild(successMessage);
    });

    // Handle mobile menu toggle (for responsiveness)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
