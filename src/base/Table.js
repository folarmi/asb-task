import union from "../assets/Union.png";
import icon from "../assets/icons-menu.png";
import "../css/Table.css";
import arrowhigh from "../assets/arrowhigh.png";
import arrowright from "../assets/arrowright.png";
import arrowup from "../assets/arrowup.png";

function Table(props) {
  const iconObj = {
    high: arrowhigh,
    mid: arrowright,
    low: arrowup,
  };

  return (
    <div className="table">
      <main className="table-flex">
        <label htmlFor="checkbox"></label>
        <input type="checkbox" />
        <img src={union} alt="unions" />
        <p className="table-data-name">{props.name}</p>
        <div className="address">
          <p>Lagos State</p>
          <small>{props.street}</small>
        </div>
        <button
          style={{ color: `${props.myColor}`, background: `${props.bg}` }}
        >
          {props.status}
        </button>
        <div className="entries">
          <ul>
            <li>{props.entry} Unique Entries</li>
            <small>{props.entryState}</small>
          </ul>
        </div>
        <div className="risks">
          <img src={iconObj[props.risklevel]} alt="risk" />
          <p className="risk" style={{ color: `${props.riskColor}` }}>
            {props.risk} risk
          </p>
        </div>
        <img src={icon} alt="icon" />
      </main>
    </div>
  );
}

export default Table;
