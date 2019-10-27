import React from 'react';

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
                </div>
            </div>
        );
    }
}

export default DoctorsPortal;
