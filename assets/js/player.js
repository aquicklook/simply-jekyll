document.addEventListener('DOMContentLoaded', () => { 
  const controls = ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'airplay', 'fullscreen']
  const settings = ['speed']
  const i18n = { speed: 'Speed' }
  const speed =  { selected: 1, options: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }
  const player = new Plyr('#player', { 
     debug: true,
  title: 'View From A Blue Moon',
  iconUrl: 'https://cdn.jsdelivr.net/gh/theprojectsomething/plyr@a55bf00/demo/dist/demo.svg',
  keyboard: {
    global: true,
  },
  tooltips: {
    controls: true,
  },
  captions: {
    active: true,
  },
  previewThumbnails: {
    enabled: true,
    src: [
      'https://cdn.plyr.io/static/demo/thumbs/240p.vtt',
    ],
  },
  vimeo: {
    referrerPolicy: 'no-referrer',
  },
  fullscreen: {
    enabled: true,
    fallback: true,
    iosNative: false,
    container: '#container',
  }, 
    controls , 
    settings , 
    i18n , 
    speed 
  });
  window.player = player;
  player.volume = 0.5;
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});

