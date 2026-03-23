// SPT Chatbot UI Logic
(function() {
    // --- CONTEXT-AWARE LOGIC ---
    // Determine current page context
    function getPageContext() {
      const path = window.location.pathname;
      if (/student-dashboard/i.test(path)) return 'student';
      if (/teacher-dashboard/i.test(path)) return 'teacher';
      if (/admin-dashboard/i.test(path)) return 'admin';
      return 'home';
    }

    // Contextual reply logic
    function getContextualReply(text, context) {
      text = text.toLowerCase();
      // HOME PAGE CONTEXT
      if (context === 'home') {
        if (/what( is|')? ?(this|website|platform)/.test(text)) return "This is the Student Performance Tracker. You can track marks, attendance, news, and more. Sign up or log in to get started!";
        if (/login|sign ?in/.test(text)) return "To login, click on the 'Login' button at the top and enter your details.";
        if (/sign ?up|register/.test(text)) return "To sign up, click on 'Get Started' or 'Sign Up', then fill in your details.";
        if (/feature|kya kar sakta|use|kaise/.test(text)) return "You can check marks, attendance, news, and more. Use the dashboard after login.";
        if (/dashboard|get started|navigate/.test(text)) return "Use the navigation bar to go to Dashboard or Get Started.";
        return "I can only help with this section. Please ask related questions.";
      }
      // STUDENT DASHBOARD CONTEXT
      if (context === 'student') {
        if (/mark|score|result/.test(text)) return "You can see your marks and results in the 'Marks' section. If you need help understanding, let me know!";
        if (/graph|performance|progress/.test(text)) return "The graph shows your performance over time. Focus on weak subjects for improvement.";
        if (/weak|kamzor|improve|sudhar/.test(text)) return "Identify weak subjects and spend more time practicing them. Need tips?";
        if (/subject|topic/.test(text)) return "Check your subject-wise marks to know where you need to improve.";
        return "I can only help with this section. Please ask related questions.";
      }
      // TEACHER DASHBOARD CONTEXT
      if (context === 'teacher') {
        if (/student|manage|track/.test(text)) return "You can manage students and track their progress from the dashboard.";
        if (/report|performance|analy[sz]e?/.test(text)) return "Performance reports help you analyze class and student data. Use the reports tab.";
        if (/weak|identify|improve|strategy/.test(text)) return "Identify weak students by checking their marks and attendance. Suggest extra help if needed.";
        return "I can only help with this section. Please ask related questions.";
      }
      // ADMIN DASHBOARD CONTEXT
      if (context === 'admin') {
        if (/add.*teacher/.test(text)) return "To add a teacher, go to 'Users' > 'Add User' and fill in the teacher's details.";
        if (/manage.*user|student|teacher/.test(text)) return "Use the 'Users' section to manage all students and teachers.";
        if (/report|view.*report/.test(text)) return "Go to the 'Reports' section to view system and user reports.";
        if (/system|dashboard|control/.test(text)) return "The dashboard lets you manage users, announcements, fees, and more.";
        return "I can only help with this section. Please ask related questions.";
      }
      // Default fallback
      return "I can only help with this section. Please ask related questions.";
    }
  const btn = document.getElementById('sptChatbotBtn');
  const win = document.getElementById('sptChatbotWindow');
  const close = document.getElementById('sptChatbotClose');
  const body = document.getElementById('sptChatbotBody');
  const input = document.getElementById('sptChatbotInput');
  const send = document.getElementById('sptChatbotSend');
  const quickBtns = document.getElementsByClassName('spt-chatbot-quick-btn');

  // Open/close animation
  btn.addEventListener('click', () => {
    win.classList.add('open');
    setTimeout(() => input.focus(), 350);
  });
  close.addEventListener('click', () => {
    win.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (win.classList.contains('open') && e.key === 'Escape') win.classList.remove('open');
  });

  // Dummy bot replies
  const botReplies = {
    marks: "To check your marks, please login and go to the 'Marks' section on your dashboard.",
    attendance: "Attendance details are available in your dashboard under the 'Attendance' tab.",
    login: "If you're having trouble logging in, try resetting your password or contact your admin.",
    dashboard: "Your dashboard gives you access to marks, attendance, news, and more!"
  };

  function addBubble(text, sender = 'bot') {
    const div = document.createElement('div');
    div.className = 'spt-chatbot-bubble ' + sender;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'spt-chatbot-typing';
    typing.innerHTML = '<span class="spt-chatbot-typing-dot"></span><span class="spt-chatbot-typing-dot"></span><span class="spt-chatbot-typing-dot"></span>';
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;
    return typing;
  }

  function botReply(msg) {
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      addBubble(msg, 'bot');
    }, 900 + Math.random()*600);
  }

  function handleUserInput(text) {
    if (!text.trim()) return;
    addBubble(text, 'user');
    input.value = '';
    // Context-aware logic
    const context = getPageContext();
    const reply = getContextualReply(text, context);
    botReply(reply);
  }

  send.addEventListener('click', () => handleUserInput(input.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleUserInput(input.value);
  });

  Array.from(quickBtns).forEach(btn => {
    btn.addEventListener('click', () => {
      addBubble(btn.textContent, 'user');
      botReply(botReplies[btn.dataset.action] || "Let me help you with that!");
    });
  });
})();
