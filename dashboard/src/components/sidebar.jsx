
import "../css/Sidebar.css";  

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">easywire</h2>
      <ul>
        <li>🏠 Home</li>
        <li>👥 Team</li>
        <li>📝 Tasks</li>
        <li>🌴 Leaves</li>
        <li>📂 Projects</li>
        <li>⏱ Timesheet</li>
        <li>📇 Contacts</li>
        <li>⚙️ Account</li>
      </ul>
    </div>
  );
};

export default Sidebar;
