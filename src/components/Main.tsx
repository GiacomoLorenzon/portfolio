import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import avatar from '../assets/images/avatar_circle.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/GiacomoLorenzon" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Giacomo Lorenzon</h1>
          <p>Mathematical Engineer, MSc</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/GiacomoLorenzon" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;