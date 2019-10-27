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
        let startdate = new Date('2019/10/10');
        let enddate = new Date('2019/10/17');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const elems = data.checklist
            .filter(({ date }) =>
                !(date >= startdate && date <= enddate))
            .map(({ date, text }) => {
                let day = date.getDate();
                let monthNum = date.getMonth();
                let month = monthNames[monthNum];
                let year = date.getFullYear();
                return (
                    <div className="checklist-item">
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

export default Checklist;
