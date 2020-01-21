import React, { useState, useEffect } from "react";
import "../styles/App.scss";

export default function App() {
  const [drumState, setDrumState] = useState({ pressed: `` });

  // Add event listeners
  useEffect(() => {
    document.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener("keydown", downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const handleActive = letterCode => {
    let e = document.getElementById(letterCode);
    e.style.backgroundColor = "orange";
    const f = "audio-" + letterCode;
    document.getElementById(f).play();

    setDrumState(
      Object.assign({}, drumState, {
        pressed: e.getAttribute("description")
      })
    );

    setTimeout(() => {
      e.style.backgroundColor = "blue";
    }, 300);
  };

  const downHandler = e => {
    switch (e.keyCode) {
      case 81:
        handleActive("Q");
        break;
      case 87:
        handleActive("W");
        break;
      case 69:
        handleActive("E");
        break;
      case 65:
        handleActive("A");
        break;
      case 83:
        handleActive("S");
        break;
      case 68:
        handleActive("D");
        break;
      case 90:
        handleActive("Z");
        break;
      case 88:
        handleActive("X");
        break;
      case 67:
        handleActive("C");
        break;

      default:
        return "did nothing";
    }
  };

  const handleClick = e => {
    console.log(e.target.value);
    handleActive(e.target.id);
  };

  const drumPads = [
    ["Q", "Chord-1", "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"],
    ["W", "Chord-2", "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"],
    ["E", "Chord-3", "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"],
    [
      "A",
      "Shaker",
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    ],
    ["S", "Open-HH", "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"],
    [
      "D",
      "Closed-HH",
      "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    ],
    [
      "Z",
      "Punchy-Kick",
      "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    ],
    [
      "X",
      "Side-Stick",
      "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    ],
    ["C", "Snare", "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"]
  ].map(e => {
    const [letter, description, source] = e;
    return (
      <div
        key={letter}
        onClick={handleClick}
        id={letter}
        description={description}
        className="drum-pad"
      >
        <audio className="clip" src={source} id={`audio-${letter}`}></audio>
        {letter}
      </div>
    );
  });
  console.log(drumState);
  return (
    <div id="drum-machine">
      <h1 className="title-text">Drum Machine</h1>
      <div className="display-text">
        <h2 id="display">{drumState.pressed}</h2>
      </div>
      <div className="drum-pad-container">{drumPads}</div>
    </div>
  );
}
