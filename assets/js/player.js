document.addEventListener('DOMContentLoaded', () => { 
  const player = new Plyr('#player');
  window.player = player;
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});
