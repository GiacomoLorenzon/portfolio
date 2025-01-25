import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Import CSS styling
import "../assets/styles/Research.scss";

// Import images
import imperatives from "../assets/images/imperatives.png";
import brainum from "../assets/images/brainum.png";
import lifex from "../assets/images/lifex.png";

// boxes
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

// exp
import { Chip, Stack } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import WebIcon from "@mui/icons-material/Web";
import ScienceIcon from "@mui/icons-material/Science";
import DataObjectIcon from "@mui/icons-material/DataObject";
import SpeedIcon from '@mui/icons-material/Speed';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const brain = require("../assets/images/q_volume_rainbow.mp4");

interface ListItemData {
  title: string;
  description: string;
  image: string;
  video: string;
}

const data: ListItemData[] = [
  {
    title: "A discontinuous Galerkin method for the three-dimensional heterodimer model with application to prion-like proteins’ dynamics",
    description:
      "F. Antonietti, M. Corti, and G. Lorenzon presented a significant contribution to the numerical modelling of prion-like proteins' dynamics in their work, ''A discontinuous Galerkin method for the three-dimensional heterodimer model with application to prion-like proteins’ dynamics''. This study, published in the *Proceedings of the European Congress of Mathematics (2024)*, explores the use of a discontinuous Galerkin (DG) method to solve the complex, three-dimensional heterodimer model that underpins prion aggregation dynamics. The DG approach is particularly well-suited for handling the model’s intricate features, including nonlinearity, anisotropy, and the strong localisation of reactions. The authors apply this framework to prion-like proteins, offering new insights into their pathological misfolding and aggregation processes. Their methodology not only ensures robust stability and high accuracy but also demonstrates computational efficiency, making it a promising tool for large-scale simulations of protein misfolding. This work highlights the interdisciplinary fusion of applied mathematics and biophysics, paving the way for deeper understanding and potential therapeutic advances in neurodegenerative diseases.",
    image: "",
    video: brain,
  },
  {
    title: "BraiNum project",
    description: "The BraiNum project, developed at MOX (Modelling and Scientific Computing Laboratory) at Politecnico di Milano, focuses on advancing computational and mathematical methodologies for modelling brain structures and functions. The project leverages state-of-the-art numerical methods, data-driven approaches, and machine learning techniques to study the complexity of neural systems. By integrating high-resolution neuroimaging data with sophisticated computational models, BraiNum aims to provide deeper insights into brain dynamics, connectivity patterns, and neurological disorders. The project's interdisciplinary framework bridges mathematical modelling, neuroscience, and computer science, paving the way for innovative diagnostic tools and therapeutic strategies.",
    image: brainum,
    video: "",
  },
  {
    title: "life-x project",
    description:
      "The LifeX project is a cutting-edge initiative centred on the development of a high-performance C++ Finite Element library, specifically tailored for mathematical modelling and numerical simulations in cardiac applications. By offering an optimised computational framework, LifeX addresses the complexities of simulating cardiac dynamics, including electrophysiology, biomechanics, and fluid-structure interactions. Its robust and scalable design allows researchers to solve large-scale problems with high accuracy and efficiency, making it ideal for applications such as patient-specific simulations and the study of heart pathologies. The project's emphasis on open collaboration and advanced numerical techniques fosters innovation in computational cardiology, ultimately contributing to improved diagnostic and therapeutic solutions.",
    image: lifex,
    video: "",
  },
  {
    title: "Intermittent collective dynamics emerge from conflicting imperatives",
    description:
      "Intermittent collective dynamics arise when groups or systems respond to competing demands or conflicting objectives. These dynamics are characterised by phases of heightened activity interspersed with periods of relative quiescence. The conflict between imperatives—such as the tension between individual and collective interests, stability and change, or efficiency and creativity—generates patterns of interaction that are unpredictable yet patterned. This phenomenon is often observed in social movements, ecosystems, and organisational behaviour, where the interplay of divergent goals produces cycles of cooperation, competition, and reorganisation. Understanding these dynamics requires a multidisciplinary approach, blending insights from sociology, systems theory, and behavioural science to unravel how complex systems navigate internal and external contradictions.",
    image: imperatives,
    video: ""
  },
];

const categories = [
    {
      title: "Programming Languages",
      icon: <CodeIcon />,
      skills: ["C", "C++ 17/20", "Bash", "MATLAB", "Python", "AMPL", "R", "TypeScript"],
    },
    {
      title: "Data and Tools",
      icon: <StorageIcon />,
      skills: ["Docker", "SQL", "Git (CI/CD)", "Gephi", "Paraview", "OpenFoam"],
    },
    {
      title: "Web and Markup",
      icon: <WebIcon />,
      skills: ["HTML5", "CSS3", "LaTeX", "SCSS", "React", "TypeScript"],
    },
    {
      title: "Systems & Frameworks",
      icon: <TerminalIcon />,
      skills: ["UNIX", "Office"],
    },
    {
      title: "Scientific Tools",
      icon: <ScienceIcon />,
      skills: ["Make", "MATLAB", "R", "Paraview", "Comsol", "freeFEM", "ansys", "openFOAM", "Basilisk"],
    },
    {
      title: "Data Visualisation",
      icon: <DataObjectIcon />,
      skills: ["OpenFoam", "Gephi", "Paraview"],
    },
    {
      title: "HPC",
      icon: <SpeedIcon />,
      skills: ["C++", "Bash", "Fortran", "OpenMP", "MPI"]
    }
  ];

const Research: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ListItemData | null>(null);

  const handleItemClick = (item: ListItemData) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="Research">
      <h1>Research Activity</h1>
      <>
        {/* List Section */}
        <List className="list">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                onClick={() => handleItemClick(item)}
                className="list-item">
                {/* Left Icon */}
                <Box className="plus-icon"> <AddIcon fontSize="medium" /> </Box>
                {/* Title and Text */}
                <Box className="text-box">
                  <ListItemText
                    primary={<Typography className="title-text">{item.title}</Typography>}
                    secondary={<Typography className="body-text">{item.description}</Typography>}
                  />
                </Box>
              </ListItem>
              {/* Divider (except after the last item) */}
              {index < data.length - 1 && <Divider className="divider" />}
            </React.Fragment>
          ))}
        </List>

        {/* Dialog Section */}
        {selectedItem && (
          <Dialog open={!!selectedItem} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle><div className="dialog-title">{selectedItem.title}</div></DialogTitle>
            <DialogContent>
              {/* Full Image */}
              <Box
                sx={{
                  height: "300px",
                  maxWidth: "100%",
                  backgroundImage: `url(${selectedItem.image})`,
                  backgroundSize: "90%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  mb: '0',
                  marginBottom: '-150px'
                }}
              />
              <video
                className="video"
                src={selectedItem.video} // Replace with your video URL
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Full Description */}
              <Typography className="dialog-text">{selectedItem.description}</Typography>
            </DialogContent>
          </Dialog>
        )}
      </>

      <h1>Experience</h1>
      <div className="experience">
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }} // Responsive columns for different breakpoints
          spacing={2}>
          {categories.map((category, index) => (
            <Stack
              key={index}
              spacing={2}
              sx={{
                padding: "1rem",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fafafa",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {category.icon}
                <h3 style={{ margin: 0, fontSize: "1.25rem" }}>{category.title}</h3>
              </div>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <Chip
                    key={skillIndex}
                    label={skill}
                    variant="outlined"
                    sx={{
                      margin: "0.25rem",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      backgroundColor: "#ffffff",
                    }}
                  />
                ))}
              </div>
            </Stack>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Research;