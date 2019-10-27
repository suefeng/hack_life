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
        let startdate = new Date('2019-10-10');
        let enddate = new Date('2019-10-17');

        const elems = data.about
            .filter(({ date }) =>
                (date >= startdate && date <= enddate))
            .map(({ date, text, title }) => {
                return (
                    <div className="about-item">
                        <h2>{title}</h2>
                        <p>{text}</p>
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
