import React from "react";

const groups = [
  { title: "Research", skills: ["Optimal Transport", "Uncertainty Quantification", "Probabilistic Machine Learning", "Generative Modelling", "Scientific Machine Learning", "Stochastic Modelling", "Optimisation"] },
  { title: "Scientific Computing", skills: ["Numerical Analysis", "Partial Differential Equations", "Finite Elements / DG", "High-performance Computing", "Scientific Computing"] },
  { title: "Programming", skills: ["Python", "JAX", "NumPy", "C++17/20", "MPI", "OpenMP", "Bash", "MATLAB", "R"] },
  { title: "Infrastructure and Tools", skills: ["Linux", "Git / CI", "HPC clusters", "Docker", "Apptainer", "ParaView"] },
];

function TechnicalBackground() {
  return <section className="content-section technical" id="technical-background" aria-labelledby="technical-title">
    <p className="section-kicker">Methods and tools</p><h2 id="technical-title">Technical Background</h2>
    <div className="technical-grid">{groups.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
  </section>;
}

export default TechnicalBackground;
