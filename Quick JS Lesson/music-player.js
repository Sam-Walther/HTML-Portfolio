let playList = ['playlist/AETHER.ISO.mp3', 'playlist/ALGORITHM_ANGEL.mp3', 'playlist/alpine+racer.mp3', 'playlist/Ant+Racing.mp3',
    'playlist/Asteroidea.mp3', 'playlist/Back+To+Earth.mp3', 'playlist/Bliss.mp3', 'playlist/Brain+Slushie.mp3', 'playlist/Choise+Noise.mp3',
    'playlist/Dog+Bus.mp3', 'playlist/EMBRYOGLYPH.mp3', 'playlist/Felt+Good.mp3', 'playlist/Metadata.mp3', 'playlist/ready2flow.mp3',
    'playlist/Reverse Nightmare+Tower.mp3', 'playlist/S.N.U.F.F.Y.mp3', 'playlist/SPIRAL.mp3', 'playlist/Submerge.mp3', 'playlist/TRASH+CLAN.mp3',
    'playlist/Two+Morningstarz.mp3', 'playlist/Who+I+Am+(CubeNatural+Flip).mp3']


let currentSong = document.getElementById('player');
console.log(currentSong)
let songNum = 0;

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
    currentSong.play();
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
    currentSong.play();
}

function updateName() {
    let SongName = currentSong.getAttribute('src')
    SongName = SongName.substring(9)
    SongName = "Now Playing: " + SongName
    document.getElementById("song-name").innerHTML = SongName;

}