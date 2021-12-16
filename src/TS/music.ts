let myAudio = document.querySelector(".audio") as HTMLInputElement;
const audio = new Audio('./audio/audio.mp3');

export function playSong() {    
    if(audio.paused) {
        audio.play();
        myAudio.style.backgroundColor = "cornflowerblue";
        audio.loop = true;
    } else {
        audio.pause();
        myAudio.style.backgroundColor = "";
    }
};
