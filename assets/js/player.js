document.addEventListener('DOMContentLoaded', () => { 
  const controls = ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'airplay', 'fullscreen']
  const player = new Plyr('#player', { controls });
  window.player = player;
  player.volume = 0.5;
  player.pip = disable;
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});
