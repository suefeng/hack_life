import React from 'react';
import Select from 'react-select';

class Reports extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        window.location.href = '/dashboard';
    }
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => {
                if (this.state.selectedOption.value === 'glucose') {
                    document.getElementById('glucose').classList.remove('hide');
                    document.getElementById('trends').classList.add('hide');
                }
                if (this.state.selectedOption.value === 'trends') {
                    document.getElementById('glucose').classList.add('hide');
                    document.getElementById('trends').classList.remove('hide');
                }
            }
        );
    };
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
        const { selectedOption } = this.state;
        return (
            <div className="reports">
                <h1>Reports</h1>
                <div className="wrapper">
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                    <div id="glucose">
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
                    <div id="trends" className="hide">
                        <h2>Blood glucose trends</h2>
                        <h2>Blood pressure trends</h2>
                    </div>
                </div>
            </div>
        );
    }
}


const options = [
    { value: 'glucose', label: 'Glucose tolerance test' },
    { value: 'trends', label: 'Health trends' }
]

export default Reports;
