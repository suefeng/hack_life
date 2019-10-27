import React from 'react';
import LabResults from './dashboardModules/LabResults';
import DoctorsVisits from './dashboardModules/DoctorsVisits';

class DoctorsPortal extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div className="doctors-portal">
                <h1>Doctor's Portal</h1>
                <div className="wrapper">
                    <h2>Patricia Abby</h2>
                    <div className="app-grid">
                        <div className="">
                            <h3>Blood glucose trends</h3>
                        </div>
                        <div className="lab-trends">
                            <h3>Blood pressure trends</h3>
                        </div>
                    </div>
                    <div className="lab-results">
                        <h3>Lab results</h3>
                        <LabResults />
                    </div>
                    <div className="lab-results">
                        <h3>Doctor visits</h3>
                        <DoctorsVisits />
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorsPortal;
