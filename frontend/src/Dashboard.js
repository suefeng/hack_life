import React from 'react';
import moment from 'moment'

import Appointments from './dashboardModules/Appointments';
import Checklist from './dashboardModules/Checklist';
import About from './dashboardModules/About';
// import DailyTips from './dashboardModules/dailyTips';
// import LabResults from './dashboardModules/labResults';
// import StayingHealthy from './dashboardModules/stayingHealthy';
// import YouMightExperience from './dashboardModules/youMightExperience';

import { weekToDate } from './constants';

const INITIAL_WEEK = 2;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
            week: INITIAL_WEEK
        };
    }
    offsetWeek(offset) {
        this.setState(oldState => {
            let nextWeek = oldState.week + offset
            if (nextWeek < 0) {
                nextWeek = 0
            }
            return Object.assign({}, this.state, { week: nextWeek })
        })
    }
    next() {
        this.offsetWeek(1)
    }
    prev() {
        this.offsetWeek(-1)
    }
    render() {
        const { week } = this.state;
        const start = moment(weekToDate(week)).format('MMM. D');
        const end = moment(weekToDate(week + 1)).format('MMM. D');
        return (
            <div className="dashboard">
                <div className="breadcrumb">
                    <button onClick={this.prev}>&lsaquo;</button>
                    <span className="dashboard-week">Week {week}: {start}&ndash;{end}</span>
                    <button onClick={this.next}>&rsaquo;</button>
                </div>
                <div className="app-grid">
                    <div className="app-module">
                        <h2>Daily checklist</h2>
                        <Checklist week={week} />
                    </div>
                    <div className="app-module">
                        <h2>Upcoming</h2>
                        <Appointments week={week} />
                    </div>
                </div>
                <div className="grid-about">
                    <About week={week} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
