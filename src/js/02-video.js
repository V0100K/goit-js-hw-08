import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000),
);

let totalTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(totalTime);

// iframe.addEventListener('timeupdate', setRefTime);
// function setRefTime() {
//   player.currentTime = 85;
//}
