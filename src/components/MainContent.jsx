import React from 'react'
import WelcomeCard from './WelcomeCard'
import StatsCards from './StatsCards'
import Leaderboard from './Leaderboard'
import QuoteSection from './QuoteSection'
import './MainContent.css'

function MainContent() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <WelcomeCard />
        <StatsCards />
        <Leaderboard />
        <QuoteSection />
      </div>
    </main>
  )
}

export default MainContent
