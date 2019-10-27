import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <Router>
      <main className="app">
        <header className="app-header">
          <h1><a href="/"><img src={logo} className="app-logo" alt="logo" /> Life Milestones</a></h1>
        </header>
        {/* <aside class="app-sidebar">
          <a href="/login">Login</a>
        </aside> */}
        <section className="app-main-section">
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </section>
        <footer className="app-footer">
          footer
        </footer>
      </main>
    </Router>
  );
}
function login() {
  //document.querySelector('.main-section').innerHTML = ;
}
export default App;
