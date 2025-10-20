import React from 'react'
import './WelcomeCard.css'

function WelcomeCard() {
  return (
    <div className="welcome-card">
      <div className="welcome-content">
        <h1 className="welcome-title">مرحباً في</h1>
        <h2 className="welcome-brand">تبيان</h2>
        <p className="welcome-subtitle">نتمنى لك يوماً حافلاً بالعلم</p>
        <div className="welcome-badge">
          <span className="badge-icon">👤</span>
          <span className="badge-text">مرحباً M</span>
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard
