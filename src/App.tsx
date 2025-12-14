import React, { useState, useEffect } from "react";
import { FormControlLabel, Switch, styled } from "@mui/material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { Main, History, Research, Footer } from "./components";
import './index.scss';
import './App.scss';

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

  const IOSSwitch = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '500ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
      background: 'linear-gradient(45deg, #eceae6, #1e1e1e)',
    },
  }));

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <div style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 2 }} checked={mode === "dark"} onChange={handleModeChange} />}
          label={<PanoramaFishEyeIcon />}
          sx={{ "& .MuiFormControlLabel-label": { padding: "6px 0 0 0" } }}
        />
      </div>
      <Main />
      <History />
      <Research />
      <Footer />
    </div>
  );
}

export default App;
