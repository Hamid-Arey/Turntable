const trackCover = document.querySelector("#track_cover");
const trackArtist = document.querySelector("#track_artist");
const trackTitle = document.querySelector("#track_title");
const trackFeature = document.querySelector("#track_feature");
const currentMins = document.querySelector("#current_time_mins");
const currentSecs = document.querySelector("#current_time_secs");
const trackmins = document.querySelector("#track_mins");
const tracksecs = document.querySelector("#track_secs");
const prevBtn = document.querySelector("#prev");
const playPause = document.querySelector("#play_pause");
const nextBtn = document.querySelector("#next")
const trackRange = document.querySelector("#range");
const vol = document.querySelector("#vol");
const currentTrack = document.createElement("audio");
const container = document.querySelector("#container");

let isPlaying = false;
let trackIndex = 0;
let songsOriginal = songs;
loadTrack(trackIndex);
setInterval(fulltime, 1000);
console.log(songs);
generateSongButtons(songs);


function loadTrack(trackIndex) {
    currentTrack.src = songs[trackIndex].music;
    currentTrack.load();

    trackCover.src = songs[trackIndex].img;
    trackArtist.textContent = songs[trackIndex].artistName;
    trackTitle.textContent = songs[trackIndex].songName;
    trackFeature.textContent = songs[trackIndex].feature;
    // container.style.backgroundImage= "url("+songs[trackIndex].img+")";
    volume();
};

function getSongID() {

}
function fisherYatesShuffle(songs) {
    // Start from the last element
    for (let i = songs.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    console.log(songs);
    trackIndex = -1;
    return songs;
}
function next() {
    if (trackIndex >= songs.length - 1) {
        trackIndex = 0;
    } else {
        trackIndex++
    }
    loadTrack(trackIndex);
    play();
};
function shuffle() {
    fisherYatesShuffle(songs)
    document.getElementById("shuffle").display = "none";
    document.getElementById("unShuffle").display = "inline-block";
}
// function unShuffle(songs) {
//     // songs = songsOriginal;
//     // console.log(songs);
//     // return songs;
//     document.getElementById("unShuffle").display = "none";
//     document.getElementById("shuffle").display = "inline-block";
// }
function prev() {
    if (trackIndex <= 0) {
        trackIndex = songs.length - 1;
    } else {
        trackIndex--
    }
    loadTrack(trackIndex);
    play();
};
function play_pause() {
    isPlaying ? pause() : play();
};
function play() {
    isPlaying = true;
    currentTrack.play();
    playPause.classList.remove("bi-play-circle");
    playPause.classList.add("bi-pause-circle");
};
function pause() {
    isPlaying = false;
    currentTrack.pause();
    playPause.classList.remove("bi-pause-circle");
    playPause.classList.add("bi-play-circle");
};
function fulltime() {
    const mins = String(Math.floor((currentTrack.duration) / 60)).padStart(2, "0");
    const secs = String(Math.floor(currentTrack.duration - (mins * 60))).padStart(2, "0");

    const currMins = String(Math.floor((currentTrack.currentTime) / 60)).padStart(2, "0");
    const currSecs = String(Math.abs(Math.floor((currMins * 60) - currentTrack.currentTime))).padStart(2, "0");

    trackmins.textContent = mins;
    tracksecs.textContent = secs;
    currentMins.textContent = currMins;
    currentSecs.textContent = currSecs;



    trackRange.value = currentTrack.currentTime;
    trackRange.max = currentTrack.duration;


    if (currentTrack.ended) {
        next(songs);
    };
};
function volume() {
    currentTrack.volume = vol.value / 11;
};
function seek() {
    currentTrack.currentTime = trackRange.value;
};

window.onkeydown = function(event) {
    if (event.keyCode === 32) {
        play_pause(); //This will trigger a click on the first <a> element.
    } else if (event.keyCode === 39) {
        next()
    } else if (event.keyCode === 37) {
        prev();
    }
};

// Function to generate buttons for each song
function generateSongButtons(songs) {
    var container = document.getElementById("homepage-container");
    container.classList.add("display-grid");

    for (var x = 0; x < songs.length; x++) {
        var button = document.createElement("div");
        button.classList.add("songs-button")
        button.dataset.num = songs[x].num;

        var thumbnail = document.createElement("img");
        thumbnail.src = songs[x].img;

        var details = document.createElement("div");
        details.classList.add("song-button-details");

        var songName = document.createElement("span");
        songName.classList.add("song-button-song-name");
        songName.innerText = songs[x].songName;

        var songArtist = document.createElement("span");
        songArtist.classList.add("song-button-song-artist");
        songArtist.innerText = songs[x].artistName + songs[x].feature;

        details.appendChild(songName);
        details.appendChild(songArtist);
        button.appendChild(thumbnail);
        button.appendChild(details);

        container.appendChild(button);

        button.addEventListener("click", function() {
            // trackIndex = this.id.substring(0, this.id.indexOf("*"));
            const num = this.dataset.num;
            const index = songs.findIndex(e => e.num == num);
            loadTrack(index);
            console.log("track index when clicked " + trackIndex);
            play();
        });
    }
}


// Search Function
// function search_animal() {
//     let input = document.getElementById('searchbar').value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('animals');

//     for (i = 0; i < x.length; i++) {
//       if (!x[i].innerHTML.toLowerCase().includes(input)) {
//         x[i].style.display = "none";
//       }
//       else {
//         x[i].style.display = "list-item";
//       }
//     }
//   }