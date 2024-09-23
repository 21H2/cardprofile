const card = document.getElementById('card');
document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const rotateX = (y - centerY) / 50;
  const rotateY = (centerX - x) / 50;
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Title Animation
const titles = ["=Just a Lost Soul </3", "Welcome to My Space 🌟", "Exploring Darkness and Light ✨"];
let index = 0;

setInterval(() => {
  document.getElementById("dynamic-title").innerText = titles[index];
  index = (index + 1) % titles.length;
}, 3000);

// Typing Effect for the intro text
const text = "In a world of chaos, I dwell in shadows, seeking beauty in the pain and whispers of the lost.";
let charIndex = 0;

function typeText() {
  if (charIndex < text.length) {
    document.querySelector('.typing').textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  }
}

typeText();

// Particles.js Configuration
particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    color: { value: "#ff69b4" }, // Pink hearts
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false },
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
