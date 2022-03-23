import styles from "./App.module.css";
import Pomodoro from "./Components/Pomodoro/Pomodoro";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import React, { useState } from "react";
import MinContext from "./Store/min-context";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

function App() {
  const [song, setSong] = useState();
  async function fetchSong() {
    const res = await fetch("https://lofi-api.azurewebsites.net/music");
    const data = await res.json();
    setSong(data[0].music.filename);
    console.log(data);
    let src = data[0].musicURL;
  }
  return (
    <MinContext.Provider value={{ pomodoroMin: 45, breakMin: 15, flag: 0 }}>
      <Header />
      <div className={styles.pomodoro}>
        <Pomodoro />
      </div>
      <button onClick={fetchSong}></button>
      <Footer />
    </MinContext.Provider>
  );
}

export default App;
