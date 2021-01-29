import "../css/Timeline.css";
import horn from "../assets/horn.png";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-flex">
        <img src={horn} alt="horn" />
        <p>Module History</p>
      </div>
      <div className="container right">
        <div className="content">
          <p>Searched “Journal Entries” on Division module</p>
          <small>22:10 15/09/2020 .Web</small>
        </div>
      </div>

      <div className="container right">
        <div className="content">
          <p>Searched “Fingerprint record” on Division module</p>
          <small>22:10 15/09/2020 .Web</small>
        </div>
      </div>

      <div className="container right">
        <div className="content">
          <p>Searched “Journal Entries” on Division module</p>
          <small>22:10 15/09/2020 .Web</small>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
