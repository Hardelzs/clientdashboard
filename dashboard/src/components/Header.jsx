
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search" />
      <div className="header-icons">
        <span>🔔</span>
        <img src="https://i.pravatar.cc/40" alt="profile" />
      </div>
    </div>
  );
};

export default Header;
