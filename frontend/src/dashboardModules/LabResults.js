import React from 'react';
import { data } from '../dashboardData/labResults';
class LabResults extends React.Component {
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
        let elems = data.labResults
            .map(({ lab, date, result, url }) => {
                let day = date.getDate();
                let monthNum = date.getMonth();
                let year = date.getFullYear();
                let month = monthNames[monthNum];
                return (

                    <tr><td>{lab}</td><td>{month} {day}, {year}</td><td>{result}</td><td><a href={url}>View</a></td></tr>

                );
            })
        return (
            <table className="table">
                <tr><th>Lab</th><th>Date</th><th>Result</th><th></th></tr>
                {elems}
            </table>
        )
    }
}

export default LabResults;
