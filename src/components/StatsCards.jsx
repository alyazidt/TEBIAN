import React from "react";
import "./StatsCards.css";

function StatsCards() {
  const stats = [
    {
      value: "6",
      label: "المواد الدراسية",
      color: "#ffffff",
    },
    {
      value: "0",
      label: "الدروس المكتملة",
      color: "#10b981",
    },
    {
      value: "0%",
      label: "التقدم الإجمالي",
      color: "#ffffff",
    },
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-value" style={{ color: stat.color }}>
            {stat.value}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
