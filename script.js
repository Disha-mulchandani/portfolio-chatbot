// Particles.js
particlesJS("particles-bg", {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "color": { "value": "#ffffff" },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2 }
  }
});

// Chatbot
document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");

  const responses = {
    hi: "Hi there! 👋 I'm Disha M — your friendly AI & Web Developer.",
    hello: "Hey! I'm Disha, nice to meet you 😄",
    "who are you": "I'm Disha M, a passionate developer skilled in AI, JavaScript, Python, and Java programming. I love turning creative ideas into powerful digital experiences.",
    "what can you do": "I can build AI models, develop modern web apps using JavaScript and React, and create intelligent backends with Python and Flask.",
    "your skills": "My core skills include Python 🐍, JavaScript 💻, AI & Machine Learning 🤖, Web Development 🌐, and Java programming ☕.",
    "why should i hire you": "You should hire me because I combine technical skill with creativity. I’m passionate, quick-learning, and always focused on delivering real value — whether it’s through smart AI solutions or sleek web experiences.",
    "what is your passion": "My passion lies in AI and Web Development. I love blending intelligence and design — building systems that are both smart and beautiful.",
    "tell me about yourself": "I’m Disha M — a passionate coder, AI enthusiast, and web developer who thrives on solving problems with technology. I enjoy crafting applications that make life easier and more engaging.",
    bye: "Goodbye! 👋 It was great chatting with you. Hope to connect soon!",
  };

  function addMessage(sender, message) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add(sender === "user" ? "user-msg" : "bot-msg");
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function getResponse(input) {
    input = input.toLowerCase();
    for (let key in responses) {
      if (input.includes(key)) {
        return responses[key];
      }
    }
    return "I'm not sure about that 🤔, but I’m always learning more about Disha M!";
  }

  sendBtn.addEventListener("click", () => {
    const input = userInput.value.trim();
    if (!input) return;
    addMessage("user", input);
    userInput.value = "";
    setTimeout(() => {
      const reply = getResponse(input);
      addMessage("bot", reply);
    }, 600);
  });

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });
});
