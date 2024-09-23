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
}, 3000); // Change title every 3 seconds

document.addEventListener("DOMContentLoaded", function () {
  let title = document.getElementById('dynamic-title');
  let name = "Umesh Sharma - Just a Lost Soul";
  let index = 0;
  
  setInterval(() => {
    title.textContent = name.slice(0, index);
    index = index >= name.length ? 0 : index + 1;
  }, 200);
});
