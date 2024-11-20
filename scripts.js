// Dynamic Typing Effect
const description = document.getElementById('dynamic-description');
const text = "Teen tech enthusiast passionate about AI, coding, and innovation.";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    description.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.dataset.theme;
  if (currentTheme === 'light') {
    document.body.dataset.theme = 'dark';
    document.documentElement.style.setProperty('--bg-color', '#060930');
    document.documentElement.style.setProperty('--text-color', '#f4f4f4');
    document.documentElement.style.setProperty('--card-bg', '#595B83');
    document.documentElement.style.setProperty('--accent', '#F4ABC4');
  } else {
    document.body.dataset.theme = 'light';
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--card-bg', '#f0f0f0');
    document.documentElement.style.setProperty('--accent', '#595B83');
  }
});

// Initialize Particles.js
particlesJS('background', {
  particles: {
    number: { value: 100 },
    size: { value: 3 },
    move: { enable: true, speed: 2 },
    line_linked: { enable: true, distance: 150 },
    color: { value: "#ffffff" },
  },
});
