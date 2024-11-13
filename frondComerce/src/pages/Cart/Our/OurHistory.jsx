import React from 'react';
import './OurHistory.css';

const OurHistory = () => {
  return (
    <div className="our-history-container">
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="Sample Video"
          className="history-video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="details-section">
        <h2>Our History</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="stats">
          <div className="stat-item">
            <h3>10</h3>
            <p>years</p>
          </div>
          <div className="stat-item">
            <h3>8</h3>
            <p>trainers</p>
          </div>
          <div className="stat-item">
            <h3>5</h3>
            <p>directions</p>
          </div>
        </div>
        <button className="more-details-button">More Details</button>
      </div>
    </div>
  );
};

export default OurHistory;
