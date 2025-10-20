import React from 'react'
import './Sidebar.css'

function Sidebar() {
  const menuItems = [
    { icon: '🏠', text: 'الرئيسية', active: false },
    { icon: '📧', text: 'الرسائل', active: false },
    { icon: '📚', text: 'المواد العلمية', active: false },
    { icon: '🎮', text: 'التحدي', active: false },
    { icon: '🧠', text: 'المهارات', active: false },
    { icon: '⚙️', text: 'الإعدادات', active: false }
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <h3 className="sidebar-title">القائمة</h3>
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <div className="help-section">
            <h4>تسجيل الخروج</h4>
          </div>
          <div className="copyright">
            <span>Tabayan 2025 ©</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
