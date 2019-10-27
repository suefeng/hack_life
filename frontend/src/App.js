import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Home';
import Dashboard from './Dashboard';
import DoctorsPortal from './DoctorsPortal';
import Diary from './Diary';
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
    document.getElementById('sidebar').classList.toggle('hide');
    document.getElementById('overlay').classList.toggle('hide');
  }
  render() {
    return (
      <Router>
        <main className="app">
          <header className="app-header">
            <button className="app-hamburger" onClick={this.toggleHidden}>&#9776;</button>
            <h1><a href="/dashboard"><img src={logo} className="app-logo" alt="logo" /> Life Milestones</a></h1>
          </header>
          <aside id="sidebar" className="app-sidebar hide">
            <ul>
              <li><a href="/dashboard" className="app-sidebar-logo"><img src={logo} className="app-logo" alt="logo" /> Life Milestones</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/diary">Diary</a></li>
              <li><a href="/reports">Reports</a></li>
              <li><a href="/logout">Log out</a></li>
            </ul>
          </aside>
          <div id="overlay" className="overlay hide" onClick={this.toggleHidden}></div>
          <section className="app-main-section">
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/doctors-portal" component={DoctorsPortal} />
            <Route exact path="/diary" component={Diary} />
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
export default App;
