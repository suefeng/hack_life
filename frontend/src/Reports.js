import React from 'react';

class Reports extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(event) {
        event.preventDefault();
        window.location.href = '/dashboard';
    }
    render() {
        const data = {
            "report": "Glucose tolerance test",
            "testName": "Glucose",
            "date": "Oct 24, 2019",
            "result": "155",
            "flag": "High",
            "referenceRange": "< 180 mg/dL",
            "other": "Please review results with your doctor."
        }
        return (
            <div className="reports">
                <h1>Reports</h1>
                <p>Test name<br />
                    <span className="result">{data.testName}</span></p>
                <p>Date<br />
                    <span className="result">{data.date}</span></p>
                <p>Result<br />
                    <span className="result">{data.result}</span></p>
                <p>Flag<br />
                    <span className="result">{data.flag}</span></p>
                <p>Reference range<br />
                    <span className="result">{data.referenceRange}</span></p>
                <p>{data.other}</p>
            </div>
        );
    }
}

export default Reports;
