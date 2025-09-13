import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, progress, rewards, image }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={image} alt={title} />
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="course-rewards">
          <span className="reward-token">🪙 {rewards} Tokens</span>
          <span className="progress-text">{progress}% Complete</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;