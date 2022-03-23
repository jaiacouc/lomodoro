import React from "react";
import MusicPlayer from "../../MusicPlayer/MusicPlayer";
import "./Footer.css";

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <MusicPlayer />
      </footer>
    </React.Fragment>
  );
};

export default Footer;
