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
                <div className="breadcrumb"><a href="/prev">&lsaquo;</a> Week 5: Oct. 10&ndash;17, 2019 <a href="/next">&rsaquo;</a></div>
                <div className="app-grid">
                    <div className="app-module" >
                        <h2>What's new</h2>
                        <div class="white">
                            <h3>Upcoming appointment</h3>
                            <Appointments />
                        </div>
                    </div>
                    {/* <div className="app-module" >
                        <h2>Daily tips</h2>
                        <DailyTips />
                    </div>
                    <div className="app-module" >
                        <h2>You might experience</h2>
                        <YouMightExperience />
                    </div>
                    <div className="app-module" >
                        <h2>Lab results</h2>
                        <LabResults />
                    </div> */}
                    <div className="app-module" >
                        <h2>Checklist</h2>
                        <Checklist />
                    </div>
                </div>
                <div class="grid-about">
                    <About />
                </div>
            </div >
        );
    }
}

export default Dashboard;
