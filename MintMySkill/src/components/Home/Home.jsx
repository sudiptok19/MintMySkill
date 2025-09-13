import React from 'react';
import './Home.css';
import CourseCard from '../CourseCard/CourseCard';
import AchievementBadge from '../AchievementBadge/AchievementBadge';
import RewardTracker from '../RewardTracker/RewardTracker';

const Home = () => {
  // Sample data - replace with real data later
  const featuredCourses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics",
      progress: 75,
      rewards: 500,
      image: "/path/to/web-dev-image.jpg"
    },
    {
      title: "Data Science Essentials",
      description: "Master data analysis and visualization",
      progress: 30,
      rewards: 750,
      image: "/path/to/data-science-image.jpg"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Learn, Earn, and Grow with EduMint</h1>
          <p>Transform your learning journey with blockchain-verified certificates and rewards</p>
          <button className="cta-button">Start Learning</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose EduMint?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3>Learn with Purpose</h3>
            <p>Earn tokens as you progress through courses</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏆</span>
            <h3>Verified Achievements</h3>
            <p>Blockchain-backed certificates for your skills</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h3>Real Value</h3>
            <p>Convert your learning efforts into tradeable tokens</p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="course-grid">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>

      {/* Rewards Preview */}
      <section className="rewards-preview">
        <h2>Track Your Progress</h2>
        <div className="rewards-container">
          <RewardTracker 
            tokens={750} 
            level={3} 
            nextLevelTokens={1000}
          />
          <div className="achievements-preview">
            <AchievementBadge
              title="Fast Learner"
              description="Completed 5 courses in one month"
              icon="🚀"
              tokenReward={100}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of learners already earning while they learn</p>
        <button className="cta-button">Create Account</button>
      </section>
    </div>
  );
};

export default Home;