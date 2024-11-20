document.addEventListener('DOMContentLoaded', () => {
  // Typing Effect
  const text = "Teen tech enthusiast passionate about AI, coding, and innovation.";
  const typingText = document.getElementById('typingText');
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.textContent += text[index];
      index++;
      setTimeout(type, 50);
    }
  }
  type();

  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
});
