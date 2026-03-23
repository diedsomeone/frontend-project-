// Signup options modal logic
// Signup options modal logic
// main.js
// Handles animations and navigation for Student Performance Tracker

// Animate elements on page load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animated').forEach(el => {
        el.style.opacity = 1;
    });
});

// Smooth scroll for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Role selection modal logic for Get Started and Login buttons
window.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.getElementById('getStartedBtn');
    const openRoleModalBtn = document.getElementById('openRoleModalBtn');
    const roleModal = document.getElementById('roleModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const signupModal = document.getElementById('signupModal');
    const closeSignupModalBtn = document.getElementById('closeSignupModalBtn');
    if (getStartedBtn && signupModal && closeSignupModalBtn) {
        getStartedBtn.onclick = () => {
            signupModal.style.display = 'flex';
        };
        closeSignupModalBtn.onclick = () => {
            signupModal.style.display = 'none';
        };
        signupModal.onclick = (e) => {
            if (e.target === signupModal) signupModal.style.display = 'none';
        };
    }
    if (openRoleModalBtn && roleModal && closeModalBtn) {
        openRoleModalBtn.onclick = (e) => {
            e.preventDefault();
            roleModal.style.display = 'flex';
        };
        closeModalBtn.onclick = () => {
            roleModal.style.display = 'none';
        };
        roleModal.onclick = (e) => {
            if (e.target === roleModal) roleModal.style.display = 'none';
        };
    }
});

