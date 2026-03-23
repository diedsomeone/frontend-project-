// teacher-dashboard.js
// Handles teacher dashboard data and UI

// Example student list (for demo)
const students = [
    { id: "STU2026001", name: "Amit Sharma", attendance: 162, marks: { Mathematics: 88, Physics: 76, Chemistry: 69, English: 92, Computer: 95 } },
    { id: "STU2026002", name: "Priya Singh", attendance: 170, marks: { Mathematics: 78, Physics: 82, Chemistry: 85, English: 80, Computer: 90 } }
];

// Render attendance update form
function renderAttendanceUpdate() {
    let html = '<form id="attendance-form">';
    students.forEach(s => {
        html += `<div style='margin-bottom:0.7rem;'><b>${s.name}</b> (${s.id}): <input type='number' min='0' max='180' value='${s.attendance}' name='att_${s.id}' style='width:60px;'> / 180</div>`;
    });
    html += '<button type="submit" class="btn btn-primary">Update Attendance</button></form>';
    document.getElementById('attendance-update').innerHTML = html;
    document.getElementById('attendance-form').onsubmit = function(e) {
        e.preventDefault();
        alert('Attendance updated!');
    };
}
// Render marks update form
function renderMarksUpdate() {
    let html = '<form id="marks-form">';
    students.forEach(s => {
        html += `<div style='margin-bottom:0.7rem;'><b>${s.name}</b> (${s.id}):`;
        for (const [sub, mark] of Object.entries(s.marks)) {
            html += `<br>${sub}: <input type='number' min='0' max='100' value='${mark}' name='m_${s.id}_${sub}' style='width:50px;'>`;
        }
        html += '</div>';
    });
    html += '<button type="submit" class="btn btn-secondary">Update Marks</button></form>';
    document.getElementById('marks-update').innerHTML = html;
    document.getElementById('marks-form').onsubmit = function(e) {
        e.preventDefault();
        alert('Marks updated!');
    };
}
// Render student performance
function renderStudentPerformance() {
    let html = '<ul>';
    students.forEach(s => {
        const percent = Object.values(s.marks).reduce((a, b) => a + b, 0) / Object.keys(s.marks).length;
        html += `<li><b>${s.name}</b> (${s.id}): ${percent.toFixed(2)}%</li>`;
    });
    html += '</ul>';
    document.getElementById('student-performance').innerHTML = html;
}
// Render feedback form
function renderFeedback() {
    let html = '<form id="feedback-form">';
    students.forEach(s => {
        html += `<div style='margin-bottom:0.7rem;'><b>${s.name}</b> (${s.id}): <input type='text' name='f_${s.id}' placeholder='Enter feedback' style='width:200px;'></div>`;
    });
    html += '<button type="submit" class="btn btn-outline">Submit Feedback</button></form>';
    document.getElementById('teacher-feedback').innerHTML = html;
    document.getElementById('feedback-form').onsubmit = function(e) {
        e.preventDefault();
        alert('Feedback submitted!');
    };
}

window.addEventListener('DOMContentLoaded', () => {
    renderAttendanceUpdate();
    renderMarksUpdate();
    renderStudentPerformance();
    renderFeedback();
});
