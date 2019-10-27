import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(event) {
        event.preventDefault();
        window.location.href = '/dashboard';
    }
    render() {
        return (
            <div className="home">
                <h1>Welcome to Life Milestones</h1>
                <p>When is your due date?</p>
                <form onSubmit={this.handleSubmit}>
                    <input className="app-input" type="date" placeholder="MM DD YYYY" />
                    <input className="button" type="submit" value="Login" />
                </form>
                <a href="/new-account">New account</a>
            </div>
        );
    }
}

export default Home;
