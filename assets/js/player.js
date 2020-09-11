document.addEventListener('DOMContentLoaded', () => { 
  const controls = ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'airplay', 'fullscreen']
  const settings = ['speed']
  const i18n = { speed: 'Playback speed' }
  const player = new Plyr('#player', { controls , settings, i18n });
  window.player = player;
  player.volume = 0.5;
  player.speed = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});
