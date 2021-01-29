import "../css/Header.css";
import letter from "../assets/letter.png";
import fe from "../assets/FE.png";
import home from "../assets/home.png";
import entries from "../assets/entries.png";
import divisions from "../assets/divisions.png";
import search from "../assets/search.png";
import bell from "../assets/bell.png";

function Header() {
  return (
    <main className="header">
      <div className="header-flex first">
        <img src={letter} alt="letter" />
        <img src={fe} alt="fe" />
      </div>

      <div className="header-flex second">
        <img src={home} alt="home" />
        <p>Home</p>
      </div>

      <div className="header-flex third">
        <img src={entries} alt="entries" />
        <p>Entries</p>
      </div>

      <div className="header-flex active">
        <img src={divisions} alt="division" />
        <p>Divisions</p>
      </div>

      <div className="header-search">
        <img src={search} alt="" className="icon" />
        <label htmlFor="search"></label>
        <input type="search" />
      </div>

      <div className="header-flex notification">
        <img src={bell} alt="bell" />
      </div>
    </main>
  );
}

export default Header;
