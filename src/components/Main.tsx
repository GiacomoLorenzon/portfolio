import React from "react";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import avatar from "../assets/images/avatar_circle.png";
import "../assets/styles/Main.scss";

const profileLinks = [
  { label: "GitHub profile", href: "https://github.com/GiacomoLorenzon", icon: <GitHubIcon /> },
  { label: "Email Giacomo Lorenzon", href: "mailto:lorenzon.giacomo99@gmail.com", icon: <EmailIcon /> },
  { label: "Curriculum vitae", href: "https://giacomolorenzon.github.io/curriculum_vitae/main.pdf", icon: <ContentPasteSearchIcon /> },
  { label: "Book library", href: "https://giacomolorenzon.github.io/book-library/", icon: <AutoStoriesIcon /> },
];

function Main() {
  const scrollToAbout = () => {
    window.setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  return (
    <header className="hero" id="top">
      <div className="hero-content">
        <div className="hero-primary">
          <div className="image-wrapper">
            <img src={avatar} alt="Giacomo Lorenzon" />
          </div>
          <div className="hero-copy">
            <h1>Giacomo Lorenzon</h1>
            <p className="positioning">PhD researcher in applied mathematics and probabilistic machine learning</p>
            <div className="social-icons" aria-label="Profile links">
              {profileLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" aria-label={label} title={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-secondary">
          <p className="research-line">Uncertainty Quantification · Optimal Transport · Scientific Machine Learning</p>
          <p className="hero-summary">I develop probabilistic and geometric methods for reliable machine-learning models, with applications to scientific computing.</p>
        </div>
      </div>
      <Button className="scroll-button" variant="contained" endIcon={<DownhillSkiingIcon />} disableElevation onClick={scrollToAbout}>
        More
      </Button>
    </header>
  );
}

export default Main;
