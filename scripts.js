const card = document.getElementById("card");
const titles = ["=Just a Lost Soul </3", "Welcome to My Space 🌟", "Exploring Darkness and Light ✨"];
let index = 0;

// Smooth 3D card effect
document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const rotateX = (y - centerY) / 50;
  const rotateY = (centerX - x) / 50;
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset card position on mouse leave with transition
document.addEventListener("mouseleave", () => {
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
});

// Title Animation with pause on tab switch
let titleInterval = setInterval(() => {
  document.getElementById("dynamic-title").innerText = titles[index];
  index = (index + 1) % titles.length;
}, 3000);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(titleInterval);
  } else {
    titleInterval = setInterval(() => {
      document.getElementById("dynamic-title").innerText = titles[index];
      index = (index + 1) % titles.length;
    }, 3000);
  }
});

// Parallax effect for grid items with transition
document.addEventListener("mousemove", (e) => {
  const gridItems = document.querySelectorAll(".grid-item");
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
const descriptions = [
  "In a world of chaos, I dwell in shadows.",
  "Seeking beauty in the pain and whispers of the lost.",
];
const descriptionElement = document.querySelector(".info p");
let lineIndex = 0;
let charIndex = 0;

function typeDescription() {
  if (lineIndex < descriptions.length) {
    descriptionElement.textContent = "";
    const line = descriptions[lineIndex];
    charIndex = 0;

    function typeLine() {
      if (charIndex < line.length) {
        descriptionElement.textContent += line.charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, 50);
      } else {
        lineIndex++;
        setTimeout(typeDescription, 1000); // Delay before typing the next line
      }
    }

    typeLine();
  }
}

// Start typing animation when the page loads
window.addEventListener("load", typeDescription);
