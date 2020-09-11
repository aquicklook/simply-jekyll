document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  window.player = player;
  player.volume = 0.75;
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});
