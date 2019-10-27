import React from 'react';
import Calendar from 'react-calendar';

class Diary extends React.Component {
    state = {
        date: new Date(),
    }
    handleSubmit(event) {
        event.preventDefault();
        window.location.href = '/diary-entry';
    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <div className="diary">
                <h1>Diary</h1>
                <div class="wrapper">
                    <div className="app-grid">
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                        <div>
                            <button className="button" onClick={this.handleSubmit}>New entry</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Diary;
