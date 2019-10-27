import React from 'react';
import { data } from '../dashboardData/doctorsVisits';
class DoctorsVisits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // labResults: [],
            // labResults: [],
            // youMightExperience: [],
            // labResults: [],
            // labResults: []
        };
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let elems = data.doctorsVisits
            .map(({ doctor, date, purpose, url }) => {
                let day = date.getDate();
                let monthNum = date.getMonth();
                let month = monthNames[monthNum];
                let year = date.getFullYear();
                return (
                    <tr><td>{doctor}</td><td>{month} {day}, {year}</td><td>{purpose}</td><td><a href={url}>View</a></td></tr>

                );
            })
        return (
            <table className="table">
                <tr><th>Doctor</th><th>Date</th><th>Purpose</th><th></th></tr>
                {elems}
            </table>
        )
    }
}

export default DoctorsVisits;
