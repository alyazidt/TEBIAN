import React from 'react'
import './QuoteSection.css'

function QuoteSection() {
  return (
    <div className="quote-section">
      <div className="quote-content">
        <blockquote className="quote-text">
          "التعليم هو جواز السفر إلى المستقبل"
        </blockquote>
        <cite className="quote-author">- مالكوم إكس</cite>
      </div>
      
      <div className="additional-sections">
        <div className="section-item">
          <span>النشوء والارتقاء</span>
        </div>
        <div className="section-item">
          <span>مركز المساعدة</span>
        </div>
      </div>
    </div>
  )
}

export default QuoteSection
