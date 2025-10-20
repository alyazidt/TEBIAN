import React from 'react'
import './Leaderboard.css'

function Leaderboard() {
  const leaders = [
    {
      name: 'خالد سالم',
      position: 'المركز الثالث',
      points: '2200 نقطة',
      rank: 3,
      medal: '🥉'
    },
    {
      name: 'فاطمة علي',
      position: 'المركز الثاني',
      points: '2350 نقطة',
      rank: 2,
      medal: '🥈'
    },
    {
      name: 'أحمد محمد',
      position: 'المركز الأول',
      points: '2450 نقطة',
      rank: 1,
      medal: '🥇'
    }
  ]

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h3 className="leaderboard-title">نجم هذا الشهر</h3>
        <div className="leaderboard-icons">
          <span>⭐</span>
          <span>🏆</span>
        </div>
      </div>
      
      <div className="leaderboard-grid">
        {leaders.map((leader, index) => (
          <div key={index} className={`leader-card rank-${leader.rank}`}>
            <div className="leader-medal">
              {leader.medal}
            </div>
            <div className="leader-info">
              <h4 className="leader-name">{leader.name}</h4>
              <p className="leader-position">{leader.position}</p>
              <p className="leader-points">{leader.points}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard
