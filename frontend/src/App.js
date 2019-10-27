import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import Home from './Home';
import Dashboard from './Dashboard';
import DoctorsPortal from './DoctorsPortal';
import DoctorsPortalEntry from './DoctorsPortalEntry.js';
import Diary from './Diary';
import DiaryEntry from './DiaryEntry';
import Reports from './Reports';
import Login from './Login';
import LogOut from './LogOut';

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
            <div className="inner">
              <button className="app-hamburger" onClick={this.toggleHidden}><img src={hamburger} alt="" /></button>
              <h1><a href="/dashboard"><img src={logo} className="app-logo" alt="logo" /> A2O</a></h1>
            </div>
          </header>
          <aside id="sidebar" className="app-sidebar hide">
            <ul>
              <li><button className="app-hamburger" onClick={this.toggleHidden}><img src={hamburger} alt="" /></button><a href="/dashboard" className="app-sidebar-logo"><img src={logo} className="app-logo" alt="logo" /> A2O</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/diary">Diary</a></li>
              <li><a href="/reports">Reports</a></li>
              <li><a href="/logout">Log out</a></li>
            </ul>
          </aside>
          <div id="overlay" className="overlay hide" onClick={this.toggleHidden}></div>
          <section className="app-main-section">
            <div className="inner">
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/doctors-portal-entry" component={DoctorsPortalEntry} />
              <Route exact path="/doctors-portal" component={DoctorsPortal} />
              <Route exact path="/diary" component={Diary} />
              <Route exact path="/diary-entry" component={DiaryEntry} />
              <Route exact path="/reports" component={Reports} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={LogOut} />
            </div>
          </section>
        </main>
      </Router>
    );
  }
}
export default App;
