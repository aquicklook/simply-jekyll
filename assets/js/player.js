document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  window.player = player;
  player.volume = 0.5;
  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'airplay', 'fullscreen'];
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});
