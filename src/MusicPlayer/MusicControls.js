import React from "react";
import "./MusicControls.css";

const MusicControls = (props) => {
  // Music controls for the music player.
  // The play pause button decides image based on isPlaying state
  // Click events are passed back to the MusicPlayer
  return (
    <div className="audio-controls">
      <button class="btn btn-primary" type="button" onClick={props.onPrev}>
        <i class="bi bi-skip-start-fill"></i>
      </button>
      <button
        class="btn btn-primary ml-1"
        type="button"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {props.isPlaying ? (
          <i class="bi bi-pause-circle-fill"></i>
        ) : (
          <i class="bi bi-play-fill"></i>
        )}
      </button>
      <button class="btn btn-primary ml-1" type="button" onClick={props.onNext}>
        <i class="bi bi-skip-end-fill"></i>
      </button>
    </div>
  );
};

export default MusicControls;
