import "../css/Sidebar.css";
import { FaHome, FaUsers, FaTasks, FaUmbrellaBeach, FaFolder, FaClock, FaAddressBook, FaCog, FaBolt, FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">
        <FaBars className="hamburger" /> 
        easywire 
        <FaBolt className="logo-icon" />
      </h2>

      <ul>
        <li><FaHome className="icon" /> Home</li>
        <li><FaUsers className="icon" /> Team</li>
        <li><FaTasks className="icon" /> Tasks</li>
        <li><FaUmbrellaBeach className="icon" /> Leaves</li>
        <li><FaFolder className="icon" /> Projects</li>
        <li><FaClock className="icon" /> Timesheet</li>
        <li><FaAddressBook className="icon" /> Contacts</li>
        <li><FaCog className="icon" /> Account</li>
      </ul>
    </div>
  );
};

export default Sidebar;
