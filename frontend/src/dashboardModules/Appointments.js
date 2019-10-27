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
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const elems = data.appointments
            .filter(({ date }) =>
                (date >= startdate && date <= enddate))
            .map(({ date, time, text }) => {
                let day = date.getDate();
                let monthNum = date.getMonth();
                let month = monthNames[monthNum];
                return (
                    <div className="appointment" key={date}>
                        <div className="appointment-date">
                            <p><span className="appointment-month">{month}</span><span className="appointment-day">{day}</span></p>
                        </div>
                        <div className="appointment-blurb">
                            <p className="text">{text}</p>
                            <p>{time}</p>
                        </div>
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
