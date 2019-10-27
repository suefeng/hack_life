import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Home';
import Dashboard from './Dashboard';
import DoctorsPortal from './DoctorsPortal';
import DiaryEntry from './DiaryEntry';
import Reports from './Reports';
import Login from './Login';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    return (
      <Router>
        <main className="app">
          <header className="app-header">
            <button className="app-hamburger" onClick={this.toggleHidden.bind(this)}>&#9776;</button>
            <h1><a href="/"><img src={logo} className="app-logo" alt="logo" /> Life Milestones</a></h1>
          </header>
          {!this.state.isHidden && <Sidebar />}
          <section className="app-main-section">
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/doctors-portal" component={DoctorsPortal} />
            <Route exact path="/diary-entry" component={DiaryEntry} />
            <Route exact path="/reports" component={Reports} />
            <Route exact path="/login" component={Login} />
          </section>
          <footer className="app-footer">
            footer
          </footer>
        </main>
      </Router>
    );
  }
}
const Sidebar = () => (
  <div>
    <aside class="app-sidebar">
      <ul>
        <li><a href="/" className="app-sidebar-logo"><img src={logo} className="app-logo" alt="logo" /> Life Milestones</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/diary-entry">Diary</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/logout">Log out</a></li>
      </ul>
    </aside>
    <div className="overlay" onClick={this.toggleHidden.bind(this)}></div>
  </div>
)
export default App;
