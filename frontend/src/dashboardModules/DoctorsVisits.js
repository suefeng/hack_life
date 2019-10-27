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
        const elems = data.doctorsVisits.map(({ doctor, date, purpose, url }) => {
            return (

                <tr><td>{doctor}</td><td>{date}</td><td>{purpose}</td><td><a href={url}>View</a></td></tr>

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
