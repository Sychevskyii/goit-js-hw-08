import Player from '@vimeo/player';
import throttle from 'lodash-es/throttle';

const player = new Player('vimeo-player');

const saveCurrentTimeThrottled = throttle(e => {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}, 1000);

player.on('timeupdate', saveCurrentTimeThrottled);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player.setCurrentTime(parseFloat(savedTime));
}
