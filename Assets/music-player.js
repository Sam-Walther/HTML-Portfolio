let playList = ['playlist/AETHER.ISO.mp3', 'playlist/ALGORITHM_ANGEL.mp3', 'playlist/alpine+racer.mp3', 'playlist/Ant+Racing.mp3',
    'playlist/Asteroidea.mp3', 'playlist/Back+To+Earth.mp3', 'playlist/Bliss.mp3', 'playlist/Brain+Slushie.mp3', 'playlist/Choise+Noise.mp3',
    'playlist/Dog+Bus.mp3', 'playlist/EMBRYOGLYPH.mp3', 'playlist/Felt+Good.mp3', 'playlist/Metadata.mp3', 'playlist/ready2flow.mp3',
    'playlist/Reverse Nightmare+Tower.mp3', 'playlist/S.N.U.F.F.Y.mp3', 'playlist/SPIRAL.mp3', 'playlist/Submerge.mp3', 'playlist/TRASH+CLAN.mp3',
    'playlist/Two+Morningstarz.mp3', 'playlist/Who+I+Am+(CubeNatural+Flip).mp3']


let currentSong = document.getElementById('player');
console.log(currentSong)
let songNum = 0;

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function nextSong() {
    console.log('I should go to the next song')
    // Select the <link> element
    if (songNum != 20) {
        songNum++;
    }
    else {
        songNum = 0;
    }
    currentSong.setAttribute('src', playList[songNum]);
    playPause("js");
}

function previousSong() {
    console.log('I should go to the previous song')
    // Select the <link> element
    if (songNum != 0) {
        songNum--;
    }
    else {
        songNum = 20;
    }
    currentSong.setAttribute('src', playList[songNum]);
    playPause("js");
}

function playPause(source) {
    let player = document.getElementById('mini-player');
    let playPauseBTN = document.getElementById('playButton');
    if (source == "js") {
        currentSong.play();
        player.style.backgroundImage = "url('cassettePlay.gif')"
        playPauseBTN.style.backgroundImage = "url('pauseB.png')"
    }
    else {
        if (currentSong.paused) {
            currentSong.play();
            player.style.backgroundImage = "url('cassettePlay.gif')"
            playPauseBTN.style.backgroundImage = "url('pauseB.png')"
            console.log("play")
        }
        else {
            currentSong.pause();
            player.style.backgroundImage = "url('cassettePause.png')"
            playPauseBTN.style.backgroundImage = "url('PlayB.png')"
            console.log('pause')
        }
    }
}

player.style.backgroundImage = "url('cassettePlay.gif')"
player.style.backgroundImage = "url('cassettePause.png')"


function displaySongDuration() {
    let duration = currentSong.duration;
    let minutes = 0;
    while (duration > 60) {
        duration = duration - 60;
        minutes++;
    }
    duration = Math.round(duration);

    if (duration < 10) {
        console.log("i should 0 the title thingy")
        duration = "0" + duration
    };
    console.log("display a duration")

    document.getElementById('time').innerHTML = minutes + ":" + duration;
}


async function displayDuration() {
    let time = currentSong.currentTime;
    let minutesLeft = 0;
    while (time > 60) {
        time = time - 60;
        minutesLeft++;
    }
    time = Math.round(time);
    if (time < 10) {
        console.log("i should 0")
        time = "0" + time
    }

    document.getElementById('duration').innerHTML = minutesLeft + ":" + time + "/";

    await sleep(500);
    displayDuration();
}
displayDuration();
function updateName() {
    let SongName = currentSong.getAttribute('src')
    SongName = SongName.substring(9)
    SongName = "Now Playing: " + SongName
    document.getElementById("song-name").innerHTML = SongName;
}