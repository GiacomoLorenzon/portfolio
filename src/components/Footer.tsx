import React from "react";
import '../assets/styles/Footer.scss'

// import from MUI
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
  return (
    <footer>
      <div className="icons">
        <a href="https://github.com/GiacomoLorenzon" target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub profile">
            <GitHubIcon />
        </a>
        <a href="mailto:lorenzon.giacomo99@gmail.com" aria-label="Email Giacomo Lorenzon" title="Email">
            <EmailIcon />
        </a>
        <a href="https://t.me/lorenzon_giacomo" target="_blank" rel="noreferrer" aria-label="Telegram profile" title="Telegram profile">
            <TelegramIcon />
        </a>
      </div>
      <p>
        <b>Giacomo Lorenzon</b>
      </p>
      <p className="footer-note">PhD researcher in applied mathematics and probabilistic machine learning.</p>
    </footer>
  );
}

export default Footer;
