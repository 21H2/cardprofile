// JavaScript to trigger the slide-up animation when scrolled
document.addEventListener('scroll', function () {
  const card = document.getElementById('card');
  const gridContainer = document.getElementById('grid-container');
  
  // Check if we've scrolled past the card section
  if (window.scrollY + window.innerHeight > card.offsetTop + card.offsetHeight) {
    gridContainer.classList.add('show');
  } else {
    gridContainer.classList.remove('show');
  }
});

