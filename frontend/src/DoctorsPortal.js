import React from 'react';

class DoctorsPortal extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div className="doctors-portal">
                <h1>Doctor's Portal</h1>
                <div class="wrapper">
                    <h2>Patricia</h2>
                    <p>Appointments</p>
                    <p>Oct 19, 2019, 1-1:30pm</p>
                    <div classNames="">
                        <h3>Visit notes</h3>
                    </div>
                    <div className="">
                        <h3>After-care summary</h3>
                        <p>Checklist</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorsPortal;
