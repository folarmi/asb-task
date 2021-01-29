import "../css/Card.css";
function Card(props) {
  return (
    <div className="card">
      <section className="card-info">
        <p>{props.number}</p>
        <img src={props.image} alt="icon" />
      </section>
      <small>{props.title}</small>
    </div>
  );
}

export default Card;
