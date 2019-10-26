import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <section class="main-section">
        main
      </section>
      <aside class="sidebar">
        sidebar
      </aside>
      <footer class="footer">
        footer
      </footer>
    </main>
  );
}

export default App;
