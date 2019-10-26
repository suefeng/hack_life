import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div class="form">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <p><label>Name:</label><br />
                        <input type="text" name="name" /></p>
                    <p><label>Password:</label><br />
                        <input type="password" name="password" /></p>
                    <input type="submit" value="Go!" />
                </form>
            </div>
        );
    }

}

export default Login;
