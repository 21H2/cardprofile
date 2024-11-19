const card = document.getElementById("card");
const titles = ["=Just a Lost Soul </3", "Welcome to My Space 🌟", "Exploring Darkness and Light ✨"];
let index = 0;

// Smooth 3D card effect based on mouse position
document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  
  // Calculate rotation angles based on mouse position
  const rotateX = (y - centerY) / 10;  // Adjust sensitivity (divide by 10 for smoother effect)
  const rotateY = (centerX - x) / 10;

  // Apply the transform to create the 3D effect
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
