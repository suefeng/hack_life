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
                                <h2>The {trimester} trimester</h2>
                                <p>{description}</p>
                            </div>
                        );
                    })
            }
        </div>
    )
}

export default About;
