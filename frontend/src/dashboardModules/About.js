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
        let startdate = new Date('2019/10/10');
        let enddate = new Date('2019/10/17');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const elems = data.about
            .filter(({ date }) =>
                !(date >= startdate && date <= enddate))
            .map(({ date, text, title }) => {
                let day = date.getDate();
                let monthNum = date.getMonth();
                let month = monthNames[monthNum];
                let year = date.getFullYear();
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
