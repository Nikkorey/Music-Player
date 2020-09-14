import songs from "./songList.js";

const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const album = document.getElementById("album");

let isPlaying = false;

// Playsong
const playSong = () => {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
};

// PauseSong
const pauseSong = () => {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
};

// EventListener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

nextBtn.addEventListener("click", () => {
  console.log("hello");
});

console.log(songs);
