import React from 'react';
import './RewardTracker.css';

const RewardTracker = ({ tokens, level, nextLevelTokens }) => {
  const progress = (tokens / nextLevelTokens) * 100;

  return (
    <div className="reward-tracker">
      <div className="tracker-header">
        <div className="current-tokens">
          <span className="token-icon">🪙</span>
          <span className="token-amount">{tokens}</span>
        </div>
        <div className="level-badge">Level {level}</div>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <span className="progress-text">{tokens}/{nextLevelTokens} tokens to Level {level + 1}</span>
      </div>
    </div>
  );
};

export default RewardTracker;