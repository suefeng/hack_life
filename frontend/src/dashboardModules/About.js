import React from 'react';
import { data } from '../dashboardData/about';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // about: [],
            // dailyTips: [],
            // youMightExperience: [],
            // labResults: [],
            // about: []
        };
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        //const { about } = this.state;

        const elems = data.about
            .filter(({ week }) =>
                (week === '5'))
            .map(({ week, description, trimester }) => {
                return (
                    <div className="about-item" key={week}>
                        <h2>About the {trimester} trimester, week {week}</h2>
                        <p dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                );
            })
        return (
            <div>
                {elems}
            </div>
        )
    }
}

export default About;
