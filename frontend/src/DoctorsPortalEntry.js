import React from 'react';

class DoctorsPortalEntry extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div className="doctors-portal">
                <header className="doctors-portal-heading">
                    <div class="inner"><h1>Doctor's Portal</h1></div>
                </header>
                <div className="inner">
                    <div className="wrapper">
                        <h2>Patricia Abbey <span className="date">Oct, 29, 2019</span></h2>
                        <div className="">
                            <h3>Notes from Patient</h3>
                            <p>Feeling numbness in hands, very tired, also very thirsty.</p>
                        </div>
                        <div className="doctors-visit">
                            <h3>Visit notes</h3>
                            <textarea name="visit-notes" className="app-textarea">Patient has been experiencing symptoms since a week ago. Currently in the first trimester and high risk of gestational diabetes. Will follow up with patient after her visit.</textarea>
                        </div>
                        <div className="doctors-after-care">
                            <h3>After-care summary</h3>
                            <textarea name="visit-notes" className="app-textarea">Referral to Dr. Jazz. To keep a healthy diet, focus on grains, fiber, beans, and nuts.</textarea>
                        </div>
                        <input type="submit" className="doctors-portal-button" value="Save" />
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorsPortalEntry;
