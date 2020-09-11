document.addEventListener('DOMContentLoaded', () => { 
  const controls = ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'airplay', 'fullscreen']
  const settings = ['speed']
  const i18n = { speed: 'Playback speed' }
  const speed =  { selected: 1, options: [0.25 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }
  const player = new Plyr('#player', { controls , settings, i18n , speed });
  window.player = player;
  player.volume = 0.5;
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});
