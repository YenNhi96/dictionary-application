import React from "react";
import "./App.css";
import audioIcon from "./audio-player.png";

export default function AudioPlay(props) {
  let url = props.source;
  function audioPlay() {
    const audioPlayer = new Audio(`${url}`);
    audioPlayer.play();
  }

  if (url) {
    return (
      <button onClick={audioPlay}>
        <img className="audio-icon" src={audioIcon} alt="audio" />
      </button>
    );
  }
}
