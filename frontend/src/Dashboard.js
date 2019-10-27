import React from 'react';
import Appointments from './dashboardModules/Appointments';
import Checklist from './dashboardModules/Checklist';
import About from './dashboardModules/About';
// import DailyTips from './dashboardModules/dailyTips';
// import LabResults from './dashboardModules/labResults';
// import StayingHealthy from './dashboardModules/stayingHealthy';
// import YouMightExperience from './dashboardModules/youMightExperience';
class Dashboard extends React.Component {
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

        return (
            <div className="dashboard">
                <div className="breadcrumb"><a href="/prev">&lsaquo;</a><span className="dashboard-week">Week 5: Oct. 10&ndash;17, 2019</span><a href="/next">&rsaquo;</a></div>
                <div className="app-grid">
                    <div className="app-module">
                        <h2>Daily checklist</h2>
                        <Checklist />
                    </div>
                    <div className="app-module">
                        <h2>Upcoming</h2>
                        <Appointments />
                    </div>
                </div>
                <div className="grid-about">
                    <About />
                </div>
            </div>
        );
    }
}

export default Dashboard;
