const card = document.querySelector("#card");
let flipped = false;

// Auto Flip Every 3 Seconds
setInterval(() => {
  flipped = !flipped;
  card.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
}, 3000);
