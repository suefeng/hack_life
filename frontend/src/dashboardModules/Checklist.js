import React from 'react';
import { data } from '../dashboardData/checklist';
class Checklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Checklist: [],
            // dailyTips: [],
            // youMightExperience: [],
            // labResults: [],
            // checklist: []
        };
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        //const { Checklist } = this.state;
        let startdate = new Date('2019-10-10');
        let enddate = new Date('2019-10-17');
        const elems = data.checklist
            .filter(({ date }) =>
                (date >= startdate && date <= enddate))
            .map(({ date, text, href }) => {
                return (
                    <div className="checklist-item" key={date}>
                      <p><a href={href}>{text}</a></p>
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

export default Checklist;
