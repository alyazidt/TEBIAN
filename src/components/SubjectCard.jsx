import React from 'react'
import './SubjectCard.css'

function SubjectCard({ subject }) {
  return (
    <div className="subject-card">
      <div className="subject-header">
        <div className="subject-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M7 8h10M7 12h8M7 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="subject-info">
          <h3 className="subject-name">{subject.name}</h3>
          <p className="subject-type">{subject.subject}</p>
        </div>
      </div>
      
      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">التقدم الإجمالي</span>
          <span className="progress-percentage">{subject.progress}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${subject.progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="lesson-stats">
        <div className="lesson-stat">
          <span className="stat-label">إجمال الدروس</span>
          <span className="stat-value">{subject.totalLessons}</span>
        </div>
        <div className="lesson-stat">
          <span className="stat-label">الدروس المكتملة</span>
          <span className="stat-value">{subject.completedLessons}</span>
        </div>
      </div>
    </div>
  )
}

export default SubjectCard
