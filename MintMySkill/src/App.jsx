import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import CourseCard from './components/CourseCard/CourseCard'
import AchievementBadge from './components/AchievementBadge/AchievementBadge'
import RewardTracker from './components/RewardTracker/RewardTracker'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={
              <div className="courses-page">
                <h1>Available Courses</h1>
                <div className="course-grid">
                  <CourseCard 
                    title="Web Development"
                    description="Learn full-stack web development"
                    progress={60}
                    rewards={300}
                    image="/web-dev.jpg"
                  />
                  <CourseCard 
                    title="Data Science"
                    description="Master data analysis and ML"
                    progress={40}
                    rewards={400}
                    image="/data-science.jpg"
                  />
                </div>
              </div>
            } />
            <Route path="/achievements" element={
              <div className="achievements-page">
                <h1>Your Achievements</h1>
                <div className="achievements-grid">
                  <AchievementBadge 
                    title="Quick Learner"
                    description="Completed first course in record time"
                    icon="🚀"
                    tokenReward={100}
                  />
                  <AchievementBadge 
                    title="Consistent Scholar"
                    description="Logged in for 7 days straight"
                    icon="📚"
                    tokenReward={50}
                  />
                </div>
              </div>
            } />
            <Route path="/rewards" element={
              <div className="rewards-page">
                <h1>Your Rewards</h1>
                <RewardTracker 
                  tokens={750}
                  level={3}
                  nextLevelTokens={1000}
                />
                <div className="rewards-history">
                  {/* Add rewards history here */}
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
