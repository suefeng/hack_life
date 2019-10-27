import React from 'react';

class Home extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        window.location.href = '/dashboard';
    }
    render() {
        return (
            <div className="home">
                <div className="home-inner">
                    <h1>Welcome to A2O</h1>
                    <p>When is your due date?</p>
                    <form onSubmit={this.handleSubmit}>
                        <input className="app-input" type="date" placeholder="MM DD YYYY" />
                        <input className="button" type="submit" value="Login" />
                    </form>
                    <a href="/new-account">New account</a>
                </div>
            </div>
        );
    }
}

export default Home;
