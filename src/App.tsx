import React, { useState, useEffect } from "react";
import { FormControlLabel, Switch, styled } from "@mui/material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { About, CurrentResearch, Footer, History, Main, Publications, Research, TechnicalBackground } from "./components";
import './index.scss';
import './App.scss';

const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '500ms',
    '&.Mui-checked': { transform: 'translateX(16px)', color: '#fff' },
  },
  '& .MuiSwitch-thumb': { boxSizing: 'border-box', width: 22, height: 22 },
  '& .MuiSwitch-track': {
    borderRadius: 13,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], { duration: 500 }),
    background: 'linear-gradient(45deg, #eceae6, #1e1e1e)',
  },
}));

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedMode) setMode(savedMode);
  }, []);

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMode = event.target.checked ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <div className="theme-control">
        <FormControlLabel
          control={<IOSSwitch checked={mode === "dark"} onChange={handleModeChange} inputProps={{ "aria-label": "Use dark theme" }} />}
          label={<PanoramaFishEyeIcon />}
        />
      </div>
      <Main />
      <main>
        <About />
        <CurrentResearch />
        <Publications />
        <Research />
        <History />
        <TechnicalBackground />
      </main>
      <Footer />
    </div>
  );
}

export default App;
