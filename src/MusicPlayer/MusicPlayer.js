import React, { useState, useEffect, useRef, useCallback } from "react";
import MusicControls from "./MusicControls";

import "./MusicPlayer.css";

const MusicPlayer = (props) => {
  // Audio refs
  const audioElement = useRef(null);
  const intervalRef = useRef();
  // States
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [nextTrackIndex, setNextTrackIndex] = useState(trackIndex + 1);
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Timer to keep track of song ending and move on to the next song
  const startTimer = () => {
    // Clear any timers
    clearInterval(intervalRef.current);
    // set timer
    intervalRef.current = setInterval(() => {
      // Check for song ending
      if (audioElement.current.ended) {
        toNextTrack();
      }
    }, [1000]);
  };

  // Keep track of next track and start the new timer if track has changed
  useEffect(() => {
    setNextTrackIndex(() => {
      if (trackIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return trackIndex + 1;
      }
    });
    startTimer();
  }, [trackIndex]);

  // Play/Pause music
  useEffect(() => {
    playing();
  });

  // Play/Pause music function
  // Checks to see if songs have loaded
  // Then checks for isPlaying status to play or pause music
  const playing = () => {
    if (!isLoading) {
      if (isPlaying) {
        audioElement.current.play();
      } else {
        audioElement.current.pause();
      }
    }
  };

  // Api fetch songs
  const fetchSongs = useCallback(async () => {
    // Set loading state
    setIsLoading(true);
    // Set error state
    setError(null);
    try {
      const response = await fetch("https://lofi-api.azurewebsites.net/music");
      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }
      // Get songs and set state
      const data = await response.json();
      setSongs(data);
      // Error handeling
    } catch (error) {
      setError(error.message);
    }
    // Set loading state
    setIsLoading(false);
  }, []);

  // Automatically mount the api call
  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  // Got to previous track
  const toPrevTrack = () => {
    setTrackIndex(() => {
      let temp = trackIndex;
      temp++;
      // Check for out of bounds set to the beginning of the playlist if at the end
      if (temp > songs.length - 1) {
        temp = 0;
      }
      return temp;
    });
  };

  // Go to next track
  const toNextTrack = () => {
    setTrackIndex(() => {
      let temp = trackIndex;
      temp--;

      // Check for out of bounds and set to start to start of playlist
      if (temp < 0) {
        temp = songs.length - 1;
      }
      return temp;
    });
  };

  return (
    <React.Fragment>
      <div className="track-info">
        {/* Check for loading of api and for errors */}
        {!isLoading && <h2 className="title">{songs[trackIndex].title}</h2>}

        {isLoading && songs.length === 0 && (
          <h2 className="title">Loading...</h2>
        )}

        {!isLoading && error && <h2 className="title">{error}</h2>}

        {!isLoading && <h3 className="artist">{songs[trackIndex].artist}</h3>}

        {isLoading && songs.length === 0 && (
          <h3 className="artist">Loading...</h3>
        )}

        {!isLoading && error && <h3 className="artist">{error}</h3>}
      </div>
      <div>
        {/* Check for if api has loaded then load audio */}
        {!isLoading && (
          <audio src={songs[trackIndex].musicURL} ref={audioElement}></audio>
        )}
      </div>
      <MusicControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onPrev={toPrevTrack}
        onNext={toNextTrack}
      />
    </React.Fragment>
  );
};

export default MusicPlayer;
