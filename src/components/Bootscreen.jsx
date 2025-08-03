import React from 'react';
import '../styles/BootScreen.css';

const BootScreen = () => {
  return (
    <div className="boot-screen">
      <img
        src="/assets/WindowsXP.png"
        alt="Windows Logo"
        className="windows-logo"
      />
      <div className="windows-text">
        <p className="microsoft">Microsoft</p>
        <p className="windows-line">
          <span className="windows">Windows</span>
          <span className="xp">xp</span>
        </p>
      </div>
      <div className="loading-bar">
        <div className="progress-indicator">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
      </div>
      <div className="boot-footer">
        <p className='boot-footer-left'>© Microsoft Corporation</p>
        <p className='boot-footer-left'>All rights reserved.</p>
        <p className='boot-footer-right'>Starting up...</p>
      </div>

    </div>
  );
};

export default BootScreen;
