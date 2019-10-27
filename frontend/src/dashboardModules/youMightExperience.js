import React from 'react';
import { data } from '../dashboardData/youMightExperience';
class YouMightExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // youMightExperience: [],
            // youMightExperience: [],
            // youMightExperience: [],
            // labResults: [],
            // checklist: []
        };
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        //const { youMightExperience } = this.state;
        let startdate = new Date('2019-10-10');
        let enddate = new Date('2019-10-17');

        const elems = data.youMightExperience
            .filter(({ date }) =>
                (date >= startdate && date <= enddate))
            .map(({ date, text }) => {
                return (
                    <div>
                        <p>{month} {day}, {year}</p>
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

export default YouMightExperience;
