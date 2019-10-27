import React from 'react';
import { data } from './data';
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
        function setModule(dataName, rangeStart, rangeEnd) {
            {
                dataName.map(dataset => {
                    let startdate = new Date(rangeStart);
                    let enddate = new Date(rangeEnd);
                    let date = dataset.date;
                    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
                    let day = date.getDate();
                    let monthNum = date.getMonth();
                    let month = monthNames[monthNum];
                    let year = date.getFullYear();
                    if (date >= startdate && date <= enddate) {
                        return (
                            <div>
                                <p>{month} {day}, {year}</p>
                                <p>{dataset.text}</p>
                            </div>
                        );
                    }
                })
            }
        }
        return (
            <div className="dashboard">
                <div className="breadcrumb"><a href="/prev">&lsaquo;</a> Week 5: Oct. 10&ndash;17, 2019 <a href="/next">&rsaquo;</a></div>
                <h1>What's coming up</h1>
                <div className="app-grid">
                    <div className="app-module" >
                        <h2>Appointments</h2>
                        {setModule(data.appointments, '2019/10/10', '2019/10/17')}
                    </div>
                    <div className="app-module" >
                        <h2>Daily tips</h2>
                        {setModule(data.dailyTips, '2019/10/10', '2019/10/17')}
                    </div>
                    <div className="app-module" >
                        <h2>You might experience</h2>
                        {setModule(data.youMightExperience, '2019/10/10', '2019/10/17')}
                    </div>
                    <div className="app-module" >
                        <h2>Lab results</h2>
                        {setModule(data.labResults, '2019/10/10', '2019/10/17')}
                    </div>
                    <div className="app-module" >
                        <h2>Checklist</h2>
                        {setModule(data.checklist, '2019/10/10', '2019/10/17')}
                    </div>
                </div>
            </div >
        );
    }
}

export default Dashboard;
