import React from "react";

// import icons
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PublicIcon from '@mui/icons-material/Public';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// impor css styling
import '../assets/styles/History.scss'

// import costants
import '../assets/styles/_constants.scss'

// Import images
import poli from '../assets/images/logo_polimi.webp';
import sorbonne from '../assets/images/logo_sorbonne.svg';
import lvt from '../assets/images/logo_lvt.png';
import aim from '../assets/images/aim.png'
import rd from '../assets/images/rd.png'
import pst from '../assets/images/pst.png'
import avis from '../assets/images/avis.png'

const history_events = [
  {
    title: 'Polytechnic University of Milan',
    what: 'Master of Science in Mathematical Engineering: Computational Science and Computational Learning',
    where: 'Milan, Italy',
    when: 'Fall 2021 - Spring 2024',
    grade: 'GPA: 29.2/30. Final grade: 110/110 cum Laude',
    icon: poli,
    details: (
      <div>
        <ul>
          <li><b>Master thesis</b>: <i>Modelling neurodegenerative disorders: a discontinuous Galerkin approach for the heterodimer model of prions dynamic</i>, under the supervision of Prof.ssa P. Antonietti.</li>
          <li><b>Relevant Coursework</b>: Algorithms and Parallel Computing, Advanced Programming for Scientific Computing, Advanced Partial Differential Equations, Real and Functional Analysis, Numerical Analysis forPartial Differential Equations, Computational Fluid Dynamics, Graph Optimisation, Stochastic Dynamical Models.</li>
          <li><b>Activities</b>: AIM member, Mentorship program, PoliMi sailing team member.</li>
          <li><b>Recognitions</b>: Two-times recipient of a merit-based scholarships.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Sorbonne University, Pierre et Marie Curie',
    where: 'Paris, France',
    when: 'Fall 2022 - Spring 2023',
    what: 'Exchange program at the Departments of Mathematics and Computational Mechanics',
    icon: sorbonne,
    details: (
      <ul>
        <li><b>Relevant coursework</b>: Numerical Methods for Fluid Mechanics, Turbulence Dynamics, Vortex Dynamics.</li>
        <li><b>Activities</b>: French course, Collège Orchestra.</li>
        <li><b>Recognitions</b>: Merit-based admission to the <i>Cité Universitaire de Paris - Collège Néerlandais</i>.</li>
      </ul>
    ),
  },
  {
    title: 'Polytechnic University of Milan',
    where: 'Milan, Italy',
    when: 'Fall 2018 - Fall 2021',
    what: 'Bachelor of Science in Mathematical Engineering',
    icon: poli,
    details: (
      <ul>
        <li><b>Thesis</b>: <i>Intermittent collective dynamics emerge from conflicting imperatives</i>.</li>
        <li><b>Relevant Coursework</b>: Mathematical Analysis, Partial Differential Equations: Analytical and Numerical Methods, Models and Methods for Statistical Inference, Probability, Operations Research, Linear Algebra, Business Economics and Organization, Automatic Control.</li>
        <li><b>Recognitions</b>: Attendance at the annual program <i>for the excellence appreciation</i>, MIUR scholarship 2017-2018. Three-times recipient of a merit-based scholarships.</li>
      </ul>
    ),
  },
  {
    title: 'High School',
    where: 'Milan, Italy',
    when: 'Fall 2018 - Fall 2021',
    what: 'Scientific diploma',
    grade: 'GPA: 9.96/10. Final grade: 100/100 cum Laude',
    icon: lvt,
    details: (
      <ul>
        <li><b>Relevant Coursework</b>: Mathematics, Biology, Informatics, Italian literature, Philosophy.</li>
        <li><b>Activities</b>: Romanae Disputationes, Mathletics, Public-speaking and Debate.</li>
        <li><b>Recognitions</b>: Five-time recipient of a merit-based scholarship from the Ministry of Education.</li>
      </ul>
    ),
  }
];

function History() {
  return (
  <div className="history">
    <h1>About</h1>
    <p>
      I graduated with honours in Mathematical Engineering from Politecnico di Milano, under the supervision of Prof.ssa Paola Antonietti. My work blends rigorous theoretical studies with a focus on practical, high-impact applications in mathematical modelling and computational science. In my free time, I enjoy playing the piano and exploring the mountains, where I find balance. I played basketball for several years leading my team through several tournaments.
    </p>
    <p><PublicIcon style={{ fontSize: '1em', color: '#1e1e1e', margin: '0 0.3em 0 0' }}/><b>Languages</b>: Italian - mother tongue, English, French - fluent.</p>


    <h1>Education</h1>
    {history_events.map((event, index) => (
      <div className="item">
        <div className="left-col">
          <div className="logo">
            <img src={event.icon} alt="logo"/>
            <div className="hover-arrow">
              <KeyboardArrowRightIcon style={{ fontSize: '2em', color: '#1e1e1e'}} />
            </div>
          </div>
          <div className="linker">
            <div className="line"></div>
          </div>
        </div>
        <div className="right-col">
          <div className="title">
            <AccountBalanceIcon style={{ fontSize: '1em', color: '#1e1e1e', margin: '0 0.3em 0 0' }} />
            {event.title}
          </div>
          <div className="what">
            <SchoolRoundedIcon style={{ fontSize: '1em', color: '#1e1e1e', margin: '0 0.3em 0 0' }} />
            {event.what}</div>
          <div className="grade">{event.grade}</div>
          <div className="where-when">
            <div className="where">
              <PlaceIcon style={{ fontSize: '1em', color: '#5d5d5d', margin: '0 0.3em 0 0' }} />
              {event.where}
            </div>
            <div className="when">
              <CalendarMonthIcon style={{ fontSize: '1em', color: '#5d5d5d', margin: '0 0.3em 0 0' }} />
              {event.when}
            </div>
          </div>
          <div className="details">{event.details}</div>
        </div>
      </div>
    ))}

    <h1>Other relevant activities</h1>
    <div className="list">
      <div className="el">
        <div className="el-img"><img src={aim} alt="aim"/></div>
        <b>AIM Associazione Ingegneri Matematici</b> (Association of Mathematical Engineers): active member and mentor of a first-year student.
      </div>
      <div className="el">
        <div className="el-img"><img src={pst} alt="pst"/></div>
        <b>PoliMi Sailing Team - Performance Department</b>: turbulence modelling on hydrofoils.
        <div>First place at the Foiling SuMoth challenge, Garda Lake, 2022.</div>
      </div>
      <div className="el">
        <div className="el-img"><img src={rd} alt="rd"/></div>
        <b>Romanae disputationes</b>: National Philosophy Competition involving intellectual debates on specific themes.
        <ul>
          <li>Logos e techne. <i>Reason and Art.</i></li>
          <li>La natura del bello. <i>The nature of Beauty.</i></li>
          <li>Un extrême désir. Natura e possibilità del desiderio. <i>Nature and Possibility of Desire.</i></li>
        </ul>
      </div>
      <div className="el">
        <div className="el-img"><img src={avis} alt="avis"/></div>
        <b>AVIS</b>: Association of Italian Blood Volunteers. <i>Associazione Volontari Italiani Sangue</i>. Blood donor.
      </div>
    </div>

    <h1>Recognitions</h1>
    <section id="recognitions">
      <ul>
        <li>
          <strong>2024, 2022:</strong> Recipient of a merit-based scholarship from INPS.
        </li>
        <li>
          <strong>2021, 2020, 2019:</strong> Polytechnic of Milan scholarship 
          <em>“for students with particular high merits”</em>.
        </li>
        <li>
          <strong>2019:</strong> Medal for excellence, Liceo L. da Vinci.
        </li>
        <li>
          <strong>2018, 2017, 2016:</strong> Recipient of a merit-based scholarship from Lombardy Region, 
          <em>“Dote scuola - merito”</em>.
        </li>
        <li>
          <strong>2018:</strong> Scholarship from the city of Gallarate 
          <em>“for students who got a mark of 100 cum Laude at the end of their upper secondary school education”</em>.
        </li>
        <li>
          <strong>2018:</strong> Admission to the <em>“National Excellence Honor Roll”</em>.
        </li>
        <li>
          <strong>2017:</strong> Mention at <em>“Alfieri del Lavoro”</em>, presidential medal, for talented high school students.
        </li>
      </ul>
    </section>
  </div>
  );
}
export default History;


// bento grids with skills