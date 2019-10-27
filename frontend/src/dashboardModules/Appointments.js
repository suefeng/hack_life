import React from 'react';
import ReactTooltip from 'react-tooltip';
import { weekToDate } from '../constants';
import { appointments, practitioners } from '../dashboardData/appointments';
function Appointments(props) {
  const { week } = props
  let startdate = weekToDate(week).toDate()
  let enddate = weekToDate(week + 1).toDate()
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  console.log(appointments)
  console.log(startdate)
  console.log(enddate)
  let elems = appointments
    .filter(({ date }) =>
      (date >= startdate && date <= enddate))
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

  if (elems.length === 0) {
    elems = <p>No appointments this week</p>
  }

  return (
    <div>
      {elems}
    </div>
  )
}

export default Appointments;
