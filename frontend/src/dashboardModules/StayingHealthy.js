import React from 'react';
import { data } from '../dashboardData/appointments';
class Appointments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // appointments: [],
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
        //const { appointments } = this.state;
        let startdate = new Date('2019-10-10');
        let enddate = new Date('2019-10-17');

        const elems = data.appointments
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

export default Appointments;
