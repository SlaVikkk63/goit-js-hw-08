
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let time;

function onPlay(data) {
    time = data.seconds

localStorage.setItem("videoplayer-current-time", time)
    
// console.log(time)
}

player.on('timeupdate', throttle(onPlay, 1000));

const timeSeconds = localStorage.getItem("videoplayer-current-time")

if (timeSeconds) {
    player.setCurrentTime(timeSeconds)
}

