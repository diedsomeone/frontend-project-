// Animated login page logic for Student Tracker

document.addEventListener('DOMContentLoaded', function () {
    const switchBtns = document.querySelectorAll('.switch-btn');
    const forms = document.querySelectorAll('.login-form');

    // Switch between login types with animation
    switchBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (btn.classList.contains('active')) return;
            document.querySelector('.switch-btn.active').classList.remove('active');
            btn.classList.add('active');
            const type = btn.getAttribute('data-type');
            forms.forEach(form => {
                form.classList.remove('active');
                if (form.classList.contains(type + '-form')) {
                    form.classList.add('active');
                }
            });
        });
    });

    // Handle login form submissions
    document.querySelector('.student-form').addEventListener('submit', function (e) {
        e.preventDefault();
        // Add authentication logic here if needed
        window.location.href = 'student-dashboard.html';
    });
    document.querySelector('.teacher-form').addEventListener('submit', function (e) {
        e.preventDefault();
        // Add authentication logic here if needed
        window.location.href = 'teacher-dashboard.html';
    });
    document.querySelector('.admin-form').addEventListener('submit', function (e) {
        e.preventDefault();
        // Add authentication logic here if needed
        window.location.href = 'admin-dashboard.html';
    });
});
