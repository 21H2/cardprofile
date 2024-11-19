// Initialize particles.js for dynamic background
particlesJS('background', {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 }
    },
    shape: { type: 'circle' },
    size: { value: 3 },
    move: { speed: 2, direction: 'none', random: true, out_mode: 'bounce' },
    opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#f4ABC4',
      opacity: 0.5,
      width: 1
    }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'repulse' } },
    modes: { repulse: { distance: 100, duration: 1 } }
  }
});
