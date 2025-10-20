import React from 'react'
import './StatsCards.css'

function StatsCards() {
  const stats = [
    {
      title: 'المواد قيد الدراسة',
      value: '0',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: '#3b82f6'
    },
    {
      title: 'الدروس المكتملة',
      value: '0',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: '#10b981'
    },
    {
      title: 'المواد الدراسية',
      value: '6',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: '#8b5cf6'
    }
  ]

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-title">{stat.title}</span>
            </div>
            <div className="stat-body">
              <span className="stat-value">{stat.value}</span>
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
