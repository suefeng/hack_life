import React from 'react';
import { data } from '../dashboardData/about';
function About(props) {
  return (
    <div>
      {
        data.about
          .filter(({ week }) =>
            (week === props.week))
            .map(({ week, description, trimester }) => {
              return (
                <div className="about-item" key={week}>
                  <h1>The {trimester} trimester</h1>
                  <h2>What to expect this week</h2>
                  <p>{description}</p>
                </div>
              );
            })
      }
    </div>
  )
}

export default About;
