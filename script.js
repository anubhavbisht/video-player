const video = document.getElementById("video-screen");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progressBar = document.getElementById("progress-bar");
const timestamp = document.getElementById("timestamp");

const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

const updateProgress = () => {
  const currentVideoDuration = video.currentTime;
  const totalDuration = video.duration;
  let minutes = Math.floor(currentVideoDuration / 60);
  let seconds = Math.floor(currentVideoDuration - minutes * 60);
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  progressBar.value = (currentVideoDuration / totalDuration) * 100;
  timestamp.innerHTML = `${minutes}:${seconds}`;
};

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

const setVideoProgress = () => {
  video.currentTime = (+progressBar.value * video.duration) / 100;
};

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progressBar.addEventListener("change", setVideoProgress);
