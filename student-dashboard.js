// student-dashboard.js
// Handles student dashboard data, analysis, and UI animations

// Example student data (for demo)
const studentData = {
    profile: {
        name: "Amit Sharma",
        id: "STU2026001",
        course: "B.Sc. Computer Science",
        year: "2nd Year",
        email: "amit.sharma@college.edu"
    },
    attendance: {
        total: 180,
        present: 162
    },
    marks: {
        Mathematics: 88,
        Physics: 76,
        Chemistry: 69,
        English: 92,
        Computer: 95
    },
    fees: {
        status: "Paid",
        dueDate: "-",
        lastUpdate: "March 2026"
    },
    news: [
        "Annual Sports Meet on 25th March!",
        "New library books available.",
        "Fee submission deadline extended to 31st March."
    ]
};

// Utility: Calculate percentage and grade
function calculatePercentage(marks) {
    const total = Object.values(marks).reduce((a, b) => a + b, 0);
    const percent = total / Object.keys(marks).length;
    return percent.toFixed(2);
}
function getGrade(percent) {
    if (percent >= 90) return "A+";
    if (percent >= 80) return "A";
    if (percent >= 70) return "B+";
    if (percent >= 60) return "B";
    if (percent >= 50) return "C";
    return "D";
}
function analyzePerformance(marks) {
    let strong = [], weak = [], suggestions = [], advice = [];
    for (const [subject, mark] of Object.entries(marks)) {
        if (mark >= 85) strong.push(subject);
        else if (mark < 70) weak.push(subject);
    }
    if (strong.length) suggestions.push(`Great in ${strong.join(", ")}. Keep it up!`);
    if (weak.length) {
        suggestions.push(`Focus more on ${weak.join(", ")}.`);
        advice.push("Attend extra classes, revise notes, and seek help from teachers for weak subjects.");
    } else {
        advice.push("Maintain your performance and keep challenging yourself.");
    }
    return { strong, weak, suggestions, advice };
}

// Render profile
function renderProfile() {
    const p = studentData.profile;
    document.getElementById('student-profile').innerHTML = `
        <b>Name:</b> ${p.name}<br>
        <b>ID:</b> ${p.id}<br>
        <b>Course:</b> ${p.course}<br>
        <b>Year:</b> ${p.year}<br>
        <b>Email:</b> ${p.email}
    `;
}
// Render attendance
function renderAttendance() {
    const a = studentData.attendance;
    const percent = ((a.present / a.total) * 100).toFixed(2);
    document.getElementById('attendance-summary').innerHTML = `
        <b>Present:</b> ${a.present} / ${a.total} <br>
        <b>Attendance %:</b> ${percent}%
    `;
}
// Render marks
function renderMarks() {
    const m = studentData.marks;
    let html = '<table style="width:100%;font-size:1rem;"><tr><th>Subject</th><th>Marks</th></tr>';
    for (const [sub, mark] of Object.entries(m)) {
        html += `<tr><td>${sub}</td><td>${mark}</td></tr>`;
    }
    html += '</table>';
    document.getElementById('marks-summary').innerHTML = html;
}
// Render performance analysis
function renderAnalysis() {
    const percent = calculatePercentage(studentData.marks);
    const grade = getGrade(percent);
    const { strong, weak } = analyzePerformance(studentData.marks);
    let html = `<b>Percentage:</b> ${percent}%<br><b>Grade:</b> ${grade}<br>`;
    html += `<b>Strong Subjects:</b> ${strong.length ? strong.join(", ") : "None"}<br>`;
    html += `<b>Weak Subjects:</b> ${weak.length ? weak.join(", ") : "None"}`;
    document.getElementById('performance-analysis').innerHTML = html;
}
// Render suggestions and advice
function renderSuggestions() {
    const { suggestions, advice } = analyzePerformance(studentData.marks);
    let html = '<ul>';
    suggestions.forEach(s => html += `<li>${s}</li>`);
    advice.forEach(a => html += `<li><b>Advice:</b> ${a}</li>`);
    html += '</ul>';
    document.getElementById('suggestions-advice').innerHTML = html;
}
// Render fee updates
function renderFees() {
    const f = studentData.fees;
    document.getElementById('fee-updates').innerHTML = `
        <b>Status:</b> ${f.status}<br>
        <b>Last Update:</b> ${f.lastUpdate}<br>
        <b>Due Date:</b> ${f.dueDate}
    `;
}
// Render news
function renderNews() {
    const n = studentData.news;
    let html = '<ul>';
    n.forEach(news => html += `<li>${news}</li>`);
    html += '</ul>';
    document.getElementById('college-news').innerHTML = html;
}

// On page load
window.addEventListener('DOMContentLoaded', () => {
    renderProfile();
    renderAttendance();
    renderMarks();
    renderAnalysis();
    renderSuggestions();
    renderFees();
    renderNews();
});
