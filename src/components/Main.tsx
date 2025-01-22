import React, { useState } from "react";

// import icons from fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Importing the GitHub icon
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// import from MUI
import ButtonIcon from '@mui/icons-material/DownhillSkiing';
// import avatar image
import avatar from '../assets/images/avatar_circle.png';
// import Material-UI Button
import Button from '@mui/material/Button';

// import styling from scss
import '../assets/styles/Main.scss';

function Main() {

  const [height, setHeight] = useState(window.innerHeight);

  const scrollToNextSection = () => {
    // Scroll to the next section (Timeline)
    window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="container" style={{ height: `${height}px` }}>
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <h1>Giacomo Lorenzon</h1>
          <p>Mathematical Engineer, MSc</p>
          <hr className="hrule" />
          <div className="social_icons">
            {/* GitHub icon */}
            <a href="https://github.com/GiacomoLorenzon" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="mailto:lorenzon.giacomo99@gmail.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          <div className="mobile_social_icons">
            {/* Mobile version of the GitHub icon */}
            <a href="https://github.com/GiacomoLorenzon" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <Button
        className="scroll-button"
        variant="contained"
        color="info"
        size="large"
        endIcon={<ButtonIcon />}
        disableElevation
        onClick={scrollToNextSection} 
      >
        More
      </Button>
    </div>
  );
}

export default Main;