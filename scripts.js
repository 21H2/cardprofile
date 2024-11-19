const card = document.getElementById("card");
const titles = ["=Just a Lost Soul </3", "Welcome to My Space 🌟", "Exploring Darkness and Light ✨"];
let index = 0;

// 3D Mouse Follow Effect
document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const rotateX = (y - centerY) / 20; // Smooth 3D effect
  const rotateY = (centerX - x) / 20; // Smooth 3D effect
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset card position when mouse leaves
document.addEventListener("mouseleave", () => {
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
});

// Title Animation with Pause on Tab Switch
let titleInterval = setInterval(() => {
  document.getElementById("dynamic-title").innerText = titles[index];
  index = (index + 1) % titles.length;
}, 5000);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(titleInterval);
  } else {
    titleInterval = setInterval(() => {
      document.getElementById("dynamic-title").innerText = titles[index];
      index = (index + 1) % titles.length;
    }, 5000);
  }
});

// Parallax Effect for Grid Items
document.addEventListener("mousemove", (e) => {
  const { clientX: mouseX, clientY: mouseY } = e;
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemCenterX = rect.left + rect.width / 2;
    const itemCenterY = rect.top + rect.height / 2;
    const distanceX = mouseX - itemCenterX;
    const distanceY = mouseY - itemCenterY;
    const angleX = (distanceY / window.innerHeight) * 10;
    const angleY = (distanceX / window.innerWidth) * -10;
    item.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });
});
