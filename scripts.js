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
    setTimeout(typeText, 100); // Adjust typing speed
  }
}

typeText();
