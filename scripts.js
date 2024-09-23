const card = document.getElementById('card');
const titles = ["=Just a Lost Soul </3", "Welcome to My Space 🌟", "Exploring Darkness and Light ✨"];
let index = 0;

// 3D card effect
document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const rotateX = (y - centerY) / 50;
  const rotateY = (centerX - x) / 50;
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset card position on mouse leave
document.addEventListener('mouseleave', () => {
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// Title Animation
setInterval(() => {
  document.getElementById("dynamic-title").innerText = titles[index];
  index = (index + 1) % titles.length;
}, 3000);

// Parallax effect for grid items
document.addEventListener('mousemove', (e) => {
  const gridItems = document.querySelectorAll('.grid-item');
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  gridItems.forEach((item, index) => {
    const depth = 15 * (index + 1);
    const moveX = mouseX * depth;
    const moveY = mouseY * depth;
    item.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// Typing animation for the description
const description = "In a world of chaos, I dwell in shadows, seeking beauty in the pain and whispers of the lost.";
const descriptionElement = document.querySelector('.info p');
let charIndex = 0;

function typeDescription() {
  if (charIndex < description.length) {
    descriptionElement.textContent += description.charAt(charIndex);
    charIndex++;
    setTimeout(typeDescription, 50);
  }
}

// Start typing animation when the page loads
window.addEventListener('load', typeDescription);

// Add glitch effect to the name
const nameElement = document.querySelector('.info h1');
setInterval(() => {
  nameElement.style.textShadow = `${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px rgba(255, 0, 0, 0.7), 
                                  ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px rgba(0, 255, 0, 0.7), 
                                  ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px rgba(0, 0, 255, 0.7)`;
  setTimeout(() => {
    nameElement.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.8)';
  }, 50);
}, 3000);
