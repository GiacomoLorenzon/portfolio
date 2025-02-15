import React, { useState } from "react";

// import from MUI
import ButtonIcon from '@mui/icons-material/DownhillSkiing';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

// import avatar image
import avatar from '../assets/images/avatar_circle.png';
// import Material-UI Button
import Button from '@mui/material/Button';

// import styling from scss
import '../assets/styles/Main.scss';

function Main() {

  const [height] = useState(window.innerHeight);
  const adjustedHeight = height - 26; // Subtract 26px from the height
  
  const scrollToNextSection = () => {
    // Scroll to the next section (Timeline)
    setTimeout(() => {
      window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
    }, 700); 
  };

  return (
    <div className="container" style={{ height: `${adjustedHeight}px` }}>
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
              <GitHubIcon style={{ fontSize: '1.2em', padding: '0', margin: '0' }}/>
            </a>
            <a href="mailto:lorenzon.giacomo99@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon style={{ fontSize: '1.2em', padding: '0', margin: '0' }}/>
            </a>
            <a href="tel:+393472548166" target="_blank" rel="noreferrer">
              <PhoneIcon style={{ fontSize: '1.2em', padding: '0', margin: '0' }} />
            </a>
            <a href="https://t.me/lorenzon_giacomo" target="_blank" rel="noreferrer">
              <TelegramIcon style={{ fontSize: '1.2em', padding: '0', margin: '0' }} />
            </a>
          </div>
          <div className="mobile_social_icons">
            {/* Mobile version of the GitHub icon */}
            <a href="https://github.com/GiacomoLorenzon" target="_blank" rel="noreferrer">
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