import React from 'react';
import Select from 'react-select';

class Reports extends React.Component {
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
                <div className="wrapper">
                    <SelectMenu />
                    <p><span className="reports-name">Test name</span>
                        <span className="reports-result">{data.testName}</span></p>
                    <p><span className="reports-name">Date</span>
                        <span className="reports-result">{data.date}</span></p>
                    <p><span className="reports-name">Result</span>
                        <span className="reports-result">{data.result}</span></p>
                    <p><span className="reports-name">Flag</span>
                        <span className="reports-result">{data.flag}</span></p>
                    <p><span className="reports-name">Reference range</span>
                        <span className="reports-result">{data.referenceRange}</span></p>
                    <p>{data.other}</p>
                </div>
            </div>
        );
    }
}


const options = [
    { value: 'glucoseToleranceTest', label: 'Glucose tolerance test' },
    { value: 'healthTrends', label: 'Health trends' }
]

const SelectMenu = () => (
    <Select options={options} />
)

export default Reports;
