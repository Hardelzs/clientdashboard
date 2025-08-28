
import "../css/RightPanle.css";

const RightPanel = () => {
  return (
    <div className="rightpanel">
      <div className="stats">
        <p>196 <br /> Number of staff</p>
        <p>16 <br /> Number of leave</p>
        <p>12 <br /> Profile update request</p>
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
