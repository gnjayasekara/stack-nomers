import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Landing Page</h1>
      </header>
      <main>
        <div className="header-section">
          <h2>Greating!!</h2>
          <div className="user-info">
            <span>User Name</span>
            <span>Token Id</span>
          </div>
        </div>
        <div className="map-view">
          <img src="https://via.placeholder.com/400x200" alt="Map View" />
        </div>
        <div className="user-details">
          <div className="user-details-placeholder"></div>
          <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
            <li>Detail 3</li>
            <li>Detail 4</li>
          </ul>
        </div>
        <div className="payment-details">
          <div className="payment-detail"></div>
          <div className="payment-detail"></div>
          <div className="payment-detail"></div>
          <div className="payment-detail"></div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
