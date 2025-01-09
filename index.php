<html>

<head>
    <title>TurnTable</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</head>

<body>
    <div id="landingPage">
        <div id="home-container">
            <div id="home">
                <img src="media/icons/home.png" alt="Home" id="homeIcon">
                <div id="homeText">Home</div>
            </div>
            <div id="search">
                <img src="media/icons/search.png" alt="Search" id="searchIcon">
                <div id="searchText">Search</div>
            </div>
        </div>
        <div id="homepage-container">
        </div>
        <div id="libraryPlaylist-container">
            <div id="library-container">
                <img src="media/icons/library.png" alt="Library" id="libraryIcon">
                <div id="libraryText">Library</div>
                <div id="librarySearch">
                    <img src="media/icons/search.png" alt="Search Library" id="librarySearchIcon">
                    <div id="librarySearchText">Search Library</div>
                </div>
            </div>
            <div id="playlists">
            </div>
        </div>
        <div id="controls">
            <div id="controls-1">
                <div id="img">
                    <img id="track_cover" alt="disc" width="250">
                </div>
                <div id="name">
                    <h3 id="track_title">track title</h3>
                    <i id="track_artist">track artist</i><i id="track_feature">track feature</i>
                </div>
            </div>
            <div id="controls-2">
                <div id="music_functions">
                    <div class="function">
                        <i id="prev" onclick="prev()" class="bi bi-skip-backward-circle"></i>
                    </div>
                    <div class="function">
                        <i id="play_pause" onclick="play_pause()" class="bi bi-play-circle"></i>
                    </div>
                    <div class="function">
                        <i id="next" onclick="next()" class="bi bi-skip-forward-circle"></i>
                    </div>
                    <div class="function">
                        <i id="shuffle" onclick="shuffle()" class="bi bi-shuffle"></i>
                    </div>
                    <div class="function">
                        <i id="unShuffle" onclick="unShuffle()" class="bi bi-shuffle"></i>
                    </div>
                    
                </div>
                <div id="music_time">
                    <p id="track_current_time"><span id="current_time_mins">00</span>:<span id="current_time_secs">00</span></p>
                    <input type="range" name="range" class="slider" onchange="seek()" id="range" min="0" max="300"
                        value="0">
                    <p id="track_fulltime"><span id="track_mins">00</span>:<span id="track_secs">00</span></p>
                </div>
            </div>
            <div id="controls-3">
                <div id="volume">
                    <i class="bi bi-volume-down"></i>
                    <input type="range" name="volume" onchange="volume()" class="slider" value="8" id="vol" min="0" max="10">
                    <i class="bi bi-volume-up"></i>
                </div>
            </div>
        </div>
    </div>
    <script src="data.js"></script>
    <script src="script.js"></script>
</body>

</html>