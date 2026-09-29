import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import poli from "../assets/images/logo_polimi.webp";
import sorbonne from "../assets/images/logo_sorbonne.svg";
import lvt from "../assets/images/logo_lvt.png";
import aim from "../assets/images/aim.png";
import avis from "../assets/images/avis.png";
import sailing from "../assets/images/pst.png";
import "../assets/styles/History.scss";

const education = [
  { period: "2025 - 2028", location: "Milan, Italy", institution: "Politecnico di Milano", degree: "PhD in Mathematical Models and Methods in Engineering", details: ["GPA: 30/30", "Supervisor: Prof. Francesco Regazzoni", "Research focus: geometric and probabilistic methods for uncertainty quantification in machine learning"], logo: poli },
  { period: "2021 - 2024", location: "Milan, Italy", institution: "Politecnico di Milano", degree: "MSc in Mathematical Engineering — Computational Science and Computational Learning", details: ["GPA: 29.2/30 · Final grade: 110/110 cum laude", "Master’s thesis on discontinuous Galerkin methods for the heterodimer model of prion dynamics, under the supervision of Prof. Paola Antonietti", "Relevant coursework: Algorithms and Parallel Computing, Advanced Programming for Scientific Computing, Advanced Partial Differential Equations, Real and Functional Analysis, Numerical Analysis for Partial Differential Equations, Computational Fluid Dynamics, Graph Optimisation and Stochastic Dynamical Models", "Activities: AIM member, mentorship programme and PoliMi Sailing Team", "Recognitions: two merit-based scholarships"], logo: poli },
  { period: "2022 - 2023", location: "Paris, France", institution: "Sorbonne Université / Pierre et Marie Curie", degree: "Exchange in Mathematics and Computational Mechanics", details: ["Relevant coursework: Numerical Methods for Fluid Mechanics, Turbulence Dynamics and Vortex Dynamics", "Activities: French course and Collège Orchestra", "Recognitions: merit-based admission to the Cité Internationale Universitaire de Paris - Collège Néerlandais"], logo: sorbonne },
  { period: "2018 - 2021", location: "Milan, Italy", institution: "Politecnico di Milano", degree: "BSc in Mathematical Engineering", details: ["Thesis: Intermittent collective dynamics emerge from conflicting imperatives", "Relevant coursework: Mathematical Analysis, Partial Differential Equations, Statistical Inference, Probability, Operations Research, Linear Algebra and Automatic Control", "Recognitions: university excellence programme, MIUR scholarship 2017 - 2018 and three merit-based scholarships"], logo: poli },
  { period: "2013 - 2018", location: "Milan, Italy", institution: "Liceo Scientifico Leonardo da Vinci", degree: "Scientific secondary-school diploma", details: ["Final grade: 100/100 cum laude", "Relevant coursework: Mathematics, Biology, Computer Science, Italian Literature and Philosophy", "Activities: Romanae Disputationes, Mathletics, public speaking and debate", "Recognitions: five merit-based scholarships from the Ministry of Education"], logo: lvt },
];

const activities = [
  { title: "AIM — Associazione Ingegneri Matematici", description: "Active member and mentor to first-year Mathematical Engineering students.", image: aim },
  { title: "PoliMi Sailing Team — Performance Department", description: "Turbulence modelling and hydrofoil analysis; first place at the Foiling SuMoth Challenge, Lake Garda, 2022.", image: sailing },
  { title: "AVIS", description: "Blood donor with the Italian Association of Blood Volunteers.", image: avis },
];

export function About() {
  return (
    <section className="content-section about" id="about" aria-labelledby="about-title">
      <p className="section-kicker">Profile</p>
      <h2 id="about-title">About</h2>
      <p className="about-copy">I am a PhD researcher at Politecnico di Milano, working under the supervision of Professor Francesco Regazzoni at the interface of applied mathematics, probabilistic machine learning and scientific computing. My current research studies how predictive distributions can be learned and regularised through optimal transport, proper scoring rules and stochastic or geometric constructions, with particular attention to calibration, model misspecification and high-dimensional scientific applications.</p>
      <p className="languages"><PublicIcon aria-hidden="true" /><strong>Languages</strong> Italian (native), English and French.</p>
    </section>
  );
}

function History() {
  return (
    <section className="content-section academic" id="education" aria-labelledby="education-title">
      <p className="section-kicker">Background</p>
      <h2 id="education-title">Education</h2>
      <div className="education-list">
        {education.map((entry, index) => (
          <article className="education-entry" key={`${entry.period}-${entry.degree}`}>
            <div className="education-marker">
              <img src={entry.logo} alt="" />
              {index < education.length - 1 && <span className="education-line" aria-hidden="true" />}
            </div>
            <div className="education-content">
              <h3>{entry.degree}</h3>
              <p className="institution">{entry.institution}</p>
              <p className="education-meta"><span>{entry.location}.</span> <span className="period">{entry.period}</span></p>
              {entry.details.length > 0 && <ul className="education-details">
                {entry.details.map((detail) => {
                  const [label, ...content] = detail.split(":");
                  return <li className="detail" key={detail}>
                    {content.length > 0 ? <><span className="detail-label">{label}:</span>{content.join(":")}.</> : `${detail}.`}
                  </li>;
                })}
              </ul>}
            </div>
          </article>
        ))}
      </div>
      <div className="academic-activity">
        <h3>Academic activity</h3>
        <ul>
          <li><span>Teaching Assistant, Numerical Analysis.</span> Politecnico di Milano, Spring 2026.</li>
          <li><span>Research talk, ECCOMAS.</span> Uncertainty quantification for reduced and surrogate models, July 2026.</li>
        </ul>
      </div>
      <div className="other-activities">
        <h3>Other relevant activities</h3>
        <div className="activity-list">
          {activities.map((activity) => <article className="activity-entry" key={activity.title}>
            <img src={activity.image} alt="" />
            <div><h4>{activity.title}</h4><p>{activity.description}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

export default History;
