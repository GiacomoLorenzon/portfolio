import React, { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import brainum from "../assets/images/brainum.png";
import lifex from "../assets/images/lifex.png";
import sailing from "../assets/images/pst.png";
import "../assets/styles/Research.scss";

const prionVideo = require("../assets/images/q_volume_rainbow.mp4");

interface Project {
  title: string;
  context: string;
  description: string;
  methods: string;
  image?: string;
  video?: string;
}

const researchThemes = [
  { title: "Optimal Transport and Uncertainty Quantification", description: "Developing probabilistic neural models in which reference perturbations are transported through learnable dynamics to induce structured predictive distributions. The resulting law is trained directly using proper scoring rules, including the Energy Score, and regularised through geometric or kinetic transport costs.", topics: ["Predictive distributions", "Calibration", "Model misspecification"] },
  { title: "Scientific Machine Learning", description: "Studying uncertainty-aware neural surrogates and operators for PDE models and field-valued outputs. The focus is spatially structured uncertainty, calibration, and robust learning when data are scarce or the computational model is misspecified.", topics: ["Neural surrogates", "PDEs", "Functional outputs"] },
  { title: "Reliable Prediction for Pretrained Scientific Models", description: "Investigating uncertainty quantification for complex pretrained scientific models, including protein-structure prediction, with emphasis on interpretable predictive dispersion and reliable evaluation.", topics: ["Pretrained models", "Scientific prediction", "Reliability"] },
];

const publications = [
  { year: "2026", title: "Optimal Transport Dropout for Structured Predictive Uncertainty", authors: "Giacomo Lorenzon, Francesco Regazzoni", venue: "arXiv preprint, arXiv:2609.33377", links: [{ label: "arXiv", href: "https://arxiv.org/abs/2609.33377" }] },
  { year: "2024", title: "A discontinuous Galerkin method for the three-dimensional heterodimer model with application to prion-like proteins’ dynamics", authors: "Paola F. Antonietti, Mattia Corti, Giacomo Lorenzon", venue: "Proceedings of the European Congress of Mathematics, 2024", links: [{ label: "arXiv", href: "https://arxiv.org/abs/2407.16065" }] },
];

const projects: Project[] = [
  { title: "Numerical modelling of prion dynamics", context: "Master’s research · BraiNum", description: "Formulated and analysed discontinuous Galerkin discretisations for a three-dimensional heterodimer model of neurodegenerative protein propagation, including simulations on brain geometries reconstructed from medical images.", methods: "DG · reaction–diffusion PDEs · numerical analysis", image: brainum, video: prionVideo },
  { title: "Cardiovascular scientific computing", context: "lifeᵡ", description: "Contributed to a high-performance C++ finite-element framework for cardiovascular modelling, working on parallel numerical methods, solver development and optimisation for large-scale simulations.", methods: "C++ · FEM · MPI · HPC", image: lifex },
  { title: "Vascular haemodynamics", context: "Scientific computing project", description: "Developed finite-element and reduced-order models for vascular flow, with attention to numerical simulation, solver behaviour and reproducible computational workflows.", methods: "C++ · haemodynamics · reduced models" },
  { title: "Hydrofoil analysis", context: "PoliMi Sailing Team", description: "Supported hydrofoil design through turbulence modelling and computational analysis within the performance team.", methods: "CFD · turbulence modelling", image: sailing },
];

export function CurrentResearch() {
  return <section className="content-section research-section" id="research" aria-labelledby="research-title">
    <p className="section-kicker">Present work</p><h2 id="research-title">Current Research</h2>
    <div className="research-grid">{researchThemes.map((theme) => <article className="research-card" key={theme.title}><h3>{theme.title}</h3><p>{theme.description}</p><ul className="topic-list" aria-label={`${theme.title} topics`}>{theme.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></article>)}</div>
  </section>;
}

export function Publications() {
  return <section className="content-section publications" id="publications" aria-labelledby="publications-title">
    <p className="section-kicker">Research outputs</p><h2 id="publications-title">Publications and Preprints</h2>
    <div className="publication-list">{publications.map((publication) => <article className="publication" key={publication.title}><p className="publication-year">{publication.year}</p><div><h3>{publication.title}</h3><p>{publication.authors}</p><p className="venue">{publication.venue}</p><div className="publication-links">{publication.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowOutwardIcon aria-hidden="true" /></a>)}</div></div></article>)}</div>
  </section>;
}

function Research() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return <section className="content-section projects" id="projects" aria-labelledby="projects-title">
    <p className="section-kicker">Previous work</p><h2 id="projects-title">Selected Projects</h2>
    <div className="project-list">{projects.map((project) => <button className="project-trigger" type="button" key={project.title} onClick={() => setSelectedProject(project)} aria-label={`Open details for ${project.title}`}><span className="project-plus" aria-hidden="true"><AddIcon /></span><span className="project-summary"><span className="project-title">{project.title}</span><span className="methods">{project.methods}</span></span></button>)}</div>
    <Dialog disableRestoreFocus disableScrollLock open={selectedProject !== null} onClose={() => setSelectedProject(null)} maxWidth="sm" fullWidth className="project-dialog-root" PaperProps={{ className: "project-dialog" }}>
      {selectedProject && <>
        <DialogTitle className="project-dialog-title"><span><small>{selectedProject.context}</small>{selectedProject.title}</span><IconButton onClick={() => setSelectedProject(null)} aria-label="Close project details"><CloseIcon /></IconButton></DialogTitle>
        <DialogContent className="project-dialog-content">
          {selectedProject.video && <video src={selectedProject.video} autoPlay loop muted playsInline aria-label={`Simulation for ${selectedProject.title}`} />}
          {!selectedProject.video && selectedProject.image && <img src={selectedProject.image} alt="" />}
          <p>{selectedProject.description}</p>
          <p className="methods">{selectedProject.methods}</p>
        </DialogContent>
      </>}
    </Dialog>
  </section>;
}

export default Research;
