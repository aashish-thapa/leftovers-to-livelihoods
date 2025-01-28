import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>Leftovers to Livelihoods</h1>
          <p>Reducing food waste, one meal at a time.</p>
        </div>
      </header>

      <section className="intro">
        <h2>How It Works</h2>
        <div className="features">
          <div className="feature">
            <div className="icon">🍽️</div>
            <h3>For Restaurants</h3>
            <p>List surplus food to contribute to reducing food waste and support your community.</p>
          </div>
          <div className="feature">
            <div className="icon">🏡</div>
            <h3>For Households</h3>
            <p>Get recipe suggestions for ingredients you already have or donate unused food to those in need.</p>
          </div>
          <div className="feature">
            <div className="icon">🤝</div>
            <h3>For Food Banks</h3>
            <p>Receive consistent donations from local restaurants and households, and streamline pickup logistics.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Join Us in the Fight Against Food Waste</h2>
        <button className="cta-button">Get Started</button>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Leftovers to Livelihoods. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
