// Import React and React hooks (useState, useEffect)
import React, { useState, useEffect } from "react";

// Import sections
import {
  Main,
  History,
  Research,
  // Navigation, // Navigation component (currently commented out)
  // Expertise,  // Expertise component (currently commented out)
  // Project,    // Project component (currently commented out)
  // Contact,    // Contact component (currently commented out)
  // Footer,     // Footer component (currently commented out)
} from "./components"; // Import components from the "components" folder
// import FadeIn from './components/FadeIn'; // Optionally, import the FadeIn animation component

import './index.scss'; // Import the global SCSS file for styling
import './App.scss'; // Import SCSS of main-container

// The Main App component
function App() {
  // Define state for the theme mode (light or dark)
  const [mode, setMode] = useState<string>('light'); // Default mode is 'light'

  // Function to toggle the mode between 'light' and 'dark'
  const handleModeChange = () => {
    if (mode === 'dark') { // If current mode is 'dark'
        setMode('light');  // Switch to 'light' mode
    } else {              // Otherwise
        setMode('dark');   // Switch to 'dark' mode
    }
  }

  // useEffect to scroll to the top-left of the page when the component is first rendered.
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []); // Empty dependency array means this runs only once when the component mounts

  // JSX returned by the component
  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      {/* Conditionally Applies 'dark-mode' or 'light-mode' class based on the mode */}
      {/* <FadeIn transitionDuration={2300}> */}
          <Main/>
          <History/>
          <Research/>
      {/*     <Navigation parentToChild={{mode}} modeChange={handleModeChange}/> 
          // Navigation component, receiving the current mode and toggle function as props
          <Expertise/> // Expertise component (might display skills or expertise areas)
          <Project/> // Project component (could showcase projects)
          <Contact/> // Contact component (likely contains contact information or a form)
      </FadeIn> 
      <Footer /> */}
    </div>
  );
}

// Export the App component as the default export
export default App;
