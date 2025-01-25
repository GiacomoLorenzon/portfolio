// Import React and React hooks (useState, useEffect)
import React, { useState, useEffect } from "react";

// Import Material-UI components for the "Back to Top" button
import { Fab } from "@mui/material";
import LandscapeIcon from '@mui/icons-material/Landscape';

// Import sections
import {
  Main,
  History,
  Research,
  // Navigation, // Navigation component (currently commented out)
  // Expertise,  // Expertise component (currently commented out)
  // Project,    // Project component (currently commented out)
  // Contact,    // Contact component (currently commented out)
  Footer,     // Footer component (currently commented out)
} from "./components"; // Import components from the "components" folder
// import FadeIn from './components/FadeIn'; // Optionally, import the FadeIn animation component

import './index.scss'; // Import the global SCSS file for styling
import './App.scss'; // Import SCSS of main-container

// The Main App component
function App() {
  // Define state for the theme mode (light or dark)
  const [mode, setMode] = useState<string>('light'); // Default mode is 'light'

  // Define state for Back to Top button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the mode between 'light' and 'dark'
  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  // Toggle visibility of Back to Top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // JSX returned by the component
  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      {/* Conditionally Applies 'dark-mode' or 'light-mode' class based on the mode */}
      {/* <FadeIn transitionDuration={2300}> */}
      <Main />
      <History />
      <Research />
      {/* <Navigation parentToChild={{mode}} modeChange={handleModeChange}/> 
          // Navigation component, receiving the current mode and toggle function as props
          <Expertise/> // Expertise component (might display skills or expertise areas)
          <Project/> // Project component (could showcase projects)
          <Contact/> // Contact component (likely contains contact information or a form)
      </FadeIn> */}
      <Footer />

      {/* Back to Top Button */}
      {isVisible && (
        <Fab
          onClick={scrollToTop}
          variant="extended"
          size="medium"
          style={{
            backgroundColor: "#1e1e1e",
            color: "#eceae6",
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 1000,
          }}
          aria-label="add"
        >
          <LandscapeIcon />
        </Fab>
      )}
    </div>
  );
}

// Export the App component as the default export
export default App;
