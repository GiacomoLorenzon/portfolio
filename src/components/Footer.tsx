import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;