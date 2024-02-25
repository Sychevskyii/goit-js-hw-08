import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

player.on('timeupdate', function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    let savedTime = localStorage.getItem('videoplayer-current-time');
    currentTime = JSON.parse(savedTime);
});

console.log(currentTime)