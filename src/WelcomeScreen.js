import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import "./WelcomeScreen.css";

function WelcomeScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. Counter animation logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    // 2. Trigger exit animation
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        if (onFinished) onFinished();
      }, 600);
    }, 4200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinished]);

  return (
    <div className={`welcome-screen ${isExiting ? "fade-out" : ""}`}>
      <div className="welcome-content">
        {/* Animated Monogram Logo */}
        <div className="welcome-logo">
          <div className="welcome-ring"></div>
          <FaCode className="welcome-icon" />
          <span className="welcome-monogram">AT</span>
        </div>

        {/* Heading */}
        <h1 className="welcome-title">
          Anselm<span className="highlight">.Tumuhaise</span>
        </h1>
        
        {/* Updated Subtitle with Mobile & Desktop Apps */}
        <p className="welcome-subtitle">
          Web, Mobile & Desktop Apps <span className="dot">•</span> IT Repair & CCTV Systems
        </p>

        {/* Progress Bar */}
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Status Indicator */}
        <div className="loading-text">
          <span>Initializing Portfolio</span>
          <span className="percentage">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;