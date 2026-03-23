// admin-dashboard.js
// Handles admin dashboard data and UI

// Example data for demo
let feeInfo = "All fees paid. Next due: July 2026.";
let newsList = ["Sports Meet on 25th March!", "New library books available."];
let announcements = ["Exam forms open from 20th March."];
let users = [
    { role: "Student", name: "Amit Sharma", id: "STU2026001" },
    { role: "Teacher", name: "Dr. Meena Rao", id: "TCH2026001" }
];

function renderFees() {
    document.getElementById('admin-fees').innerHTML = `
        <form id='fee-form'>
            <textarea name='fee-info' rows='3' style='width:100%;'>${feeInfo}</textarea><br>
            <button type='submit' class='btn btn-primary'>Update Fee Info</button>
        </form>
    `;
    document.getElementById('fee-form').onsubmit = function(e) {
        e.preventDefault();
        feeInfo = this['fee-info'].value;
        alert('Fee info updated!');
    };
}
function renderNews() {
    let html = `<form id='news-form'>`;
    html += `<textarea name='news-list' rows='3' style='width:100%;'>${newsList.join('\n')}</textarea><br>`;
    html += `<button type='submit' class='btn btn-secondary'>Update News</button></form>`;
    document.getElementById('admin-news').innerHTML = html;
    document.getElementById('news-form').onsubmit = function(e) {
        e.preventDefault();
        newsList = this['news-list'].value.split('\n');
        alert('News updated!');
    };
}
function renderAnnouncements() {
    let html = `<form id='ann-form'>`;
    html += `<textarea name='ann-list' rows='3' style='width:100%;'>${announcements.join('\n')}</textarea><br>`;
    html += `<button type='submit' class='btn btn-outline'>Update Announcements</button></form>`;
    document.getElementById('admin-announcements').innerHTML = html;
    document.getElementById('ann-form').onsubmit = function(e) {
        e.preventDefault();
        announcements = this['ann-list'].value.split('\n');
        alert('Announcements updated!');
    };
}
function renderUsers() {
    let html = '<ul>';
    users.forEach(u => {
        html += `<li><b>${u.role}:</b> ${u.name} (${u.id})</li>`;
    });
    html += '</ul>';
    document.getElementById('admin-users').innerHTML = html;
}
window.addEventListener('DOMContentLoaded', () => {
    renderFees();
    renderNews();
    renderAnnouncements();
    renderUsers();
});
