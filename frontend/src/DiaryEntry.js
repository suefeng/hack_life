import React from 'react';

class DiaryEntry extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const data = { "bloodGlucose": "N/A", "bloodPressure": "N/A" }
        return (
            <div className="diary-entry">
                <h1>New diary entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>How are you feeling?</p>
                    <div className="diary-entry-tags">
                        <button>Exhausted</button>
                        <button>Nauseated</button>
                        <button>Fatigued</button>
                        <button>Moodiness</button>
                        <button>Constipation</button>
                        <button>Cramping</button>
                    </div>
                    <div className="app-grid">
                        <div>
                            <p><label>Blood glucose level</label>
                                {data.bloodGlucose}</p>
                            <p><label>Blood pressure</label>
                                {data.bloodPressure}</p>
                        </div>
                        <div>
                            <label>Notes for doctor</label>
                            <textarea name="notes-for-doctor" className="app-textarea"></textarea>
                            <input type="submit" value="Add entry" className="button" />
                        </div>
                    </div>


                </form>
            </div>
        );
    }
}

export default DiaryEntry;
