import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

player.on('timeupdate', saveCurrentTime);

function saveCurrentTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      
    });
  let savedTime = localStorage.getItem('videoplayer-current-time');
  let currentTime = JSON.parse(savedTime);
}
