import React, { useState, useEffect, useRef } from "react";
import MusicControls from "./MusicControls";
import "./MusicPlayer.css";

const MusicPlayer = ({ tracks }) => {
  //   // States
  //   const [trackIndex, setTrackIndex] = useState(0);
  //   const [trackProgress, setTrackProgress] = useState(0);
  //   const [isPlaying, setIsPlaying] = useState(false);
  //   // Songs
  //   const { title, artist, musicURL } = tracks[trackIndex];
  //   // Audio refs
  //   const audiRef = useRef(new Audio(musicURL));
  //   const intervalRef = useRef();
  //   const isReady = useRef(false);

  //   const { duration } = audiRef.current;

  //   const prevTrack = () => {
  //     console.log("prev track");
  //   };

  //   const nextTrack = () => {
  //     console.log("next track");
  //   };

  return (
    <React.Fragment>
      <div className="track-info">
        <h2 className="title">Lucid Dreams</h2>
        <h3 className="artist">Juice Wrld</h3>
      </div>
      <MusicControls />
    </React.Fragment>
  );
};

export default MusicPlayer;
