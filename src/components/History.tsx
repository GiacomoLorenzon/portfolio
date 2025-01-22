import React from "react";

// import icons from fontAwesome
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

// import vertical timeline element from material ui
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// impor css styling
import '../assets/styles/History.scss'

const events = [
  {
    title: 'Politecnico di Milano',
    what: 'Bachelor of Science in Mathematical Engineering',
    where: 'Milan, Italy',
    when: 'Fall 2018 - Fall 2021',
    icon: faBriefcase,
    details: (
      <ul>
        <li>Specialised in applied mathematics and computational modelling.</li>
        <li>Thesis on <i>Numerical Methods for Partial Differential Equations</i>.</li>
        <li>Relevant coursework: Linear Algebra, Probability Theory, Fluid Dynamics.</li>
      </ul>
    ),
  },
  {
    title: 'Politecnico di Milano',
    where: 'Milan, Italy',
    when: 'Fall 2018 - Fall 2021',
    what: 'Bachelor of Science in Mathematical Engineering',
    icon: faBriefcase,
    details: (
      <ul>
        <li>Specialised in applied mathematics and computational modelling.</li>
        <li>Thesis on <i>Numerical Methods for Partial Differential Equations</i>.</li>
        <li>Relevant coursework: Linear Algebra, Probability Theory, Fluid Dynamics.</li>
      </ul>
    ),
  }
];

function History() {
  return (
  <div className="history">
    <h1>Education</h1>
    <div className="items-container">
      <VerticalTimeline className="timeline">
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.when}
            icon={<FontAwesomeIcon icon={event.icon} />}
            position = 'left'

            // background and color and css styling
            contentStyle={{
              background: 'green',
              transition: 'all 0.3s ease-in-out',                
            }}
            // arrow
            contentArrowStyle={{
              borderRight: '13px solid white'
            }}
            // styling of the icon: background, color and icon
            iconStyle={{
              background: '#5000ca',
            }}
            className="timeline-row"
          >
            <h3>{event.title}</h3>
            <h4>{event.what}</h4>
            <h5>{event.where}</h5>
            <p>{event.details}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </div>
  );
}
export default History;
