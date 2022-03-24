import React, { useDebugValue, useEffect, useState } from "react";
import MusicPlayer from "../../MusicPlayer/MusicPlayer";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <MusicPlayer />
      </footer>
    </React.Fragment>
  );
};

export default Footer;
