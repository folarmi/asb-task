import "../css/DivisionCard.css";
import castle from "../assets/castle.png";
import envelope from "../assets/envelope.png";
import group from "../assets/Group.png";
import note from "../assets/note-book.png";
import phone from "../assets/phone.png";
import pin from "../assets/pin.png";

function DivisionCard() {
  return (
    <main className="division">
      <div className="division-flex">
        <img src={castle} alt="castle" />
        <h6>Division Summary</h6>
      </div>

      <div className="division-flex">
        <img src={phone} alt="phone" />
        <p> 0801 234 5678</p>
      </div>

      <div className="division-flex">
        <img src={envelope} alt="envelope" />
        <p> asbfefr@gmail.com</p>
      </div>

      <div className="division-flex">
        <img src={pin} alt="pin" />
        <p> Mojidi, Lagos</p>
      </div>

      <div className="division-flex">
        <img src={note} alt="note" />
        <a href="#"> 2 Journal entries</a>
      </div>

      <div className="division-flex">
        <img src={group} alt="group" />
        <p> 24 fingerprints enrolled</p>
      </div>
    </main>
  );
}

export default DivisionCard;
