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
        //const { labResults } = this.state;
        let startdate = new Date('2019-10-10');
        let enddate = new Date('2019-10-17');

        const elems = data.labResults.map(({ lab, date, result, url }) => {
            return (

                <tr><td>{lab}</td><td>{date}</td><td>{result}</td><td><a href={url}>View</a></td></tr>

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
