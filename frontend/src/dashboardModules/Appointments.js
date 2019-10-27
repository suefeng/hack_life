import React from 'react';
import ReactTooltip from 'react-tooltip';
import { appointments, practitioners } from '../dashboardData/appointments';
class Appointments extends React.Component {
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
    let startdate = new Date('2019-10-10');
    let enddate = new Date('2019-10-17');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const elems = appointments
      .filter(({ date }) =>
        !(date >= startdate && date <= enddate))
        .map(({ date, time, text, practitioner }) => {
          let day = date.getDate();
          let monthNum = date.getMonth();
          let month = monthNames[monthNum];
          const toolTipId = `tooltip-practitioner-${practitioner.index}`
          const practitionerElem = (<>
            <span data-tip data-for={toolTipId}>{practitioner.name}</span>
            <ReactTooltip id={toolTipId} effect='solid'>
              <p>{practitioner.name}</p>
              <p><strong>{practitioner.type}</strong>—{practitioner.description}</p>
            </ReactTooltip>
          </>);
          return (
            <div className="appointment" key={date + text + time}>
              <div className="appointment-date">
                <p><span className="appointment-month">{month}</span><span className="appointment-day">{day}</span></p>
              </div>
              <div className="appointment-blurb">
                <p className="text">{text} with {practitionerElem}</p>
                <p>{time}</p>
              </div>
            </div>
          );
        })
    return (
      <div>
        {elems}
      </div>
    )
  }
}

export default Appointments;
