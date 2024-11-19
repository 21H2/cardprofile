// Initialize flip effect on card click
document.getElementById('card').addEventListener('click', function() {
  var card = document.getElementById('card');
  var sound = new Howl({
    src: ['flip-sound.mp3'] // Make sure to replace this with the correct path to your sound file
  });

  card.classList.toggle('flipped');
  sound.play();
});
