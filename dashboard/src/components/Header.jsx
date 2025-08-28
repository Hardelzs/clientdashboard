
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        🔎<input type="text" placeholder="Search ...." />
      </div>
       
      <div className="header-icons">
        <span>🔔</span>
        <img src="https://i.pravatar.cc/40" alt="profile" />
      </div>
    </div>
  );
};

export default Header;
