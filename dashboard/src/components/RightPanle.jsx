
import "../css/RightPanle.css";

const RightPanel = () => {
  return (
    <div className="rightpanel">
      <div className="stats">
        <p><span>196</span> <br /> Number of staff</p>
        <p><span>16</span> <br /> Number of leave</p>
        <p><span>12</span> <br /> Profile update request</p>
      </div>
      <div className="birthday">
        <img src="https://i.pravatar.cc/50" alt="user" />
        <p>Dwayne F. Sanders<br />Birthday Today</p>
        <button>Wish him</button>
      </div>
    </div>
  );
};

export default RightPanel;
