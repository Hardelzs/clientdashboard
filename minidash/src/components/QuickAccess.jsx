import React from "react";
import "../css/QuickAccess.css";

const items = [
  { label: "Images", icon: "🖼️", color: "#7B68EE" },
  { label: "Music", icon: "🎵", color: "#6A5ACD" },
  { label: "Video", icon: "▶️", color: "#4169E1" },
  { label: "Docs", icon: "📄", color: "#1E90FF" },
  { label: "Apps", icon: "📦", color: "#2F4F4F" },
  { label: "Download", icon: "⬇️", color: "#2C2C54" },
];

function QuickAccess() {
  return (
    <div className="quick-access">
      {items.map((item) => (
        <div
          key={item.label}
          className="quick-item"
          style={{ backgroundColor: item.color }}
        >
          <span className="icon">{item.icon}</span>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default QuickAccess;
