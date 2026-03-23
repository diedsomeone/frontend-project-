// student-dashboard.js
// Handles student dashboard data, analysis, and UI animations

// Example student data (for demo)
        name: "Amit Sharma",
// Modern Student Dashboard JS

function renderMarks() {
    // Attendance Pie Chart
    // Attendance Circular Progress (Purple)
    const attendancePercent = 96;
    const attendanceCircle = document.getElementById('attendanceCircle');
    if (attendanceCircle && attendanceCircle.getContext) {
        const ctx = attendanceCircle.getContext('2d');
        const radius = 40;
        const center = 45;
        ctx.clearRect(0, 0, 90, 90);
        // White background circle for visibility
        ctx.beginPath();
        ctx.arc(center, center, radius + 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.globalAlpha = 0.96;
        ctx.fill();
        ctx.globalAlpha = 1;
        // Background circle (lighter for more contrast)
        ctx.beginPath();
        ctx.arc(center, center, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#ede7f6';
        ctx.lineWidth = 10;
        ctx.stroke();
        // Progress arc (deeper purple gradient)
        ctx.beginPath();
        ctx.arc(center, center, radius, -0.5 * Math.PI, (2 * Math.PI) * (attendancePercent / 100) - 0.5 * Math.PI);
        const grad = ctx.createLinearGradient(0, 0, 90, 90);
        grad.addColorStop(0, '#6a0080');
        grad.addColorStop(1, '#b39ddb');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.shadowColor = '#6a008055';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
        // Center text
        ctx.font = 'bold 1.18rem Segoe UI, Arial';
        ctx.fillStyle = '#6a0080';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(attendancePercent + '%', center, center);
    }

    // Performance Graph (Chart.js)
    const perfChartElem = document.getElementById('performanceChart');
    if (perfChartElem) {
        const perfCtx = perfChartElem.getContext('2d');
        new Chart(perfCtx, {
            type: 'line',
            data: {
                labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
                datasets: [{
                    label: 'Performance (%)',
                    data: [82, 85, 88, 91, 94],
                    fill: true,
                    backgroundColor: 'rgba(180,167,255,0.13)',
                    borderColor: '#b4a7ff',
                    borderWidth: 3,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#b4a7ff',
                    pointRadius: 5,
                    tension: 0.4,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        min: 70,
                        max: 100,
                        ticks: {
                            color: '#4B3869',
                            font: { weight: 'bold' }
                        },
                        grid: {
                            color: 'rgba(180,167,255,0.10)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#4B3869',
                            font: { weight: 'bold' }
                        },
                        grid: {
                            color: 'rgba(180,167,255,0.10)'
                        }
                    }
                }
            }
        });
    }
});
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
