// SPT Chatbot UI Logic
(function() {
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
    // Dummy logic
    let reply = "Sorry, I can only answer basic questions for now.";
    if (/mark/i.test(text)) reply = botReplies.marks;
    else if (/attend/i.test(text)) reply = botReplies.attendance;
    else if (/login|password|sign ?in/i.test(text)) reply = botReplies.login;
    else if (/dashboard|home/i.test(text)) reply = botReplies.dashboard;
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
