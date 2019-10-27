import React from 'react';

class DiaryEntry extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const data = { "bloodGlucose": "13.7 mg/dL", "bloodPressure": "135/94" }
        return (
            <div className="diary-entry">
                <h1>New diary entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="wrapper">
                        <p>How are you feeling?</p>
                        <div className="diary-entry-tags">
                            <button>Exhausted</button>
                            <button className="selected">Nauseated</button>
                            <button>Fatigued</button>
                            <button>Moodiness</button>
                            <button>Constipation</button>
                            <button>Cramping</button>
                        </div>
                    </div>
                    <div className="app-grid">
                        <div class="first">
                            <p><label>Blood glucose level</label><br />
                                <strong>{data.bloodGlucose}</strong></p>
                            <p><label>Blood pressure</label><br />
                                <strong>{data.bloodPressure}</strong></p>
                            <p><label>Health data</label><br />
                                <button class="button grey">Connect to MyFitnessPal</button></p>
                        </div>
                        <div class="second">
                            <label>Notes for doctor</label>
                            <textarea name="notes-for-doctor" className="app-textarea">Feeling numbness in hands, very tired, also very thirsty.</textarea>
                            <input type="submit" value="Add entry" className="button" />
                        </div>
                    </div>


                </form>
            </div>
        );
    }
}

export default DiaryEntry;
