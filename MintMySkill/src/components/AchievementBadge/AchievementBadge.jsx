import React from 'react';
import './AchievementBadge.css';

const AchievementBadge = ({ title, description, icon, tokenReward }) => {
  return (
    <div className="achievement-badge">
      <div className="badge-icon">
        {icon}
      </div>
      <div className="badge-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <span className="token-reward">🪙 {tokenReward} Tokens Earned</span>
      </div>
    </div>
  );
};

export default AchievementBadge;