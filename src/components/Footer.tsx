import React from "react";
import '../assets/styles/Footer.scss'

// import from MUI
import ButtonIcon from '@mui/icons-material/DownhillSkiing';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
  return (
    <footer>
      <div className="icons">
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
      <p>
        <b>Giacomo Lorenzon</b>
      </p>
    </footer>
  );
}

export default Footer;