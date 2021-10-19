//Initialize the variables

//Song index
let songIndex = 1;

//Audio Elemet
let audioElement = new Audio("./songs/1.mp3");
// console.log(audioElement.duration, typeof(audioElement), "hello");

//HTML elements
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let previous = document.getElementById("previous");
let forward = document.getElementById("forward");

//Song items
let songItems = Array.from(document.getElementsByClassName('songItem'));

//List of songs
let songs = [
    {
        songName: "GOAT",
        filePath: "./songs/1.mp3",
        coverPath: "./covers/1.jpg"

    },
    {
        songName: "GOAT1",
        filePath: "./songs/2.mp3",
        coverPath: "./covers/2.jpg"

    },
    {
        songName: "GOAT2",
        filePath: "./songs/3.mp3",
        coverPath: "./covers/3.jpg"

    },
    {
        songName: "GOAT3",
        filePath: "./songs/4.mp3",
        coverPath: "./covers/4.jpg"

    },
    {
        songName: "GOAT4",
        filePath: "./songs/5.mp3",
        coverPath: "./covers/5.jpg"

    },
    {
        songName: "GOAT5",
        filePath: "./songs/6.mp3",
        coverPath: "./covers/6.jpg"

    },
    {
        songName: "GOAT6",
        filePath: "./songs/7.mp3",
        coverPath: "./covers/7.jpg"

    }
]

//Setting the coverPath, filePath and song name
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});


//Handle pause and play click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        setSongName(songIndex, 1);
        gifPlay(1);
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        setSongName(songIndex, 0);
        gifPlay(0);
    }
})

//Global utility functions
const gifPlay = (value) => {
    document.getElementById("song-gif").style.opacity = value;
}

const makeButtonPause = (songIndex) =>{
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');
}

const setSongName = (songIndex, play) => {
    let songNames = document.getElementById("songName");
    if(play === 1){
        songNames.innerText = songs[songIndex-1].songName;
    }else{
        songNames.innerText = "";
    }
    
}

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    //Update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

songItemPlay.forEach((element) => {
    element.addEventListener('click', (event) => {
        makeAllPlays();
        songIndex = parseInt(event.target.id);
        if (audioElement.paused || audioElement.currentTime <= 0) {
            event.target.classList.remove('fa-play-circle');
            event.target.classList.add('fa-pause-circle');
            audioElement.src = `./songs/${songIndex}.mp3`;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            setSongName(songIndex, 1);
            gifPlay(1);
        }
        else {
            audioElement.pause();
            event.target.classList.remove('fa-pause-circle');
            event.target.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            setSongName(songIndex, 0);
            gifPlay(0);
        }
    })
})

previous.addEventListener('click', (event) => {
    if (songIndex === 1) {
        songIndex = 7;
    } else {
        songIndex = songIndex - 1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    console.log(songIndex);
    makeButtonPause(songIndex);
    setSongName(songIndex, 1);
    gifPlay(1);
})
forward.addEventListener('click', (event) => {
    if (songIndex === 7) {
        songIndex = 1;
    } else {
        songIndex = songIndex + 1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    makeButtonPause(songIndex);
    setSongName(songIndex, 1);
    gifPlay(1);
})

