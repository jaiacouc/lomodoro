import React from "react";
import Play from "../../Assets/play-circle-fill.svg";
import Pause from "../../Assets/pause-btn-fill.svg";
import Next from "../../Assets/skip-end-fill.svg";
import Prev from "../../Assets/skip-start-fill.svg";
import "MusicControls.css";

const MusicControls = ({ isPlaying, onPlayPause, onPrev, onNext }) => {
  return (
    <div className="audio-controls">
      <button className="pause" type="button" onClick={onPrev}>
        <Prev />
      </button>
      {isPlaying ? (
        <button
          className="pause"
          type="button"
          onClick={() => onPlayPause(false)}
        >
          <Pause />
        </button>
      ) : (
        <button
          className="play"
          type="button"
          onclick={() => onPlayPause(true)}
        >
          <Play />
        </button>
      )}
      ;
      <button className="next" type="button" onClick={onNext}>
        <Next />
      </button>
    </div>
  );
};

export default MusicControls;
