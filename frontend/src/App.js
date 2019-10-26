import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  return (
    <Router>
      <main className="app">
        <header className="app-header">
          <a href="/"><img src={logo} className="app-logo" alt="logo" /> Timeline Tracker</a>
        </header>
        <aside class="app-sidebar">
          <a href="/login">Login</a>
        </aside>
        <section class="app-main-section">
          <Route exact path="/login" component={Login} />
        </section>
        <footer class="app-footer">
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
