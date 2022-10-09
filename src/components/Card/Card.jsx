import "./Card.css";
import Button from "../Button/Button";

export default function Card(props) {
  console.log(props);

  return (
    <>

        <div className="Card">
          <div className="Card-img">
            <img src={props.img} alt=""></img>
          </div>
          <div className="Card-detail">
            <h2>{props.title}</h2>
            <h4>$ {props.price}</h4>
          </div>
          <Button>Agregar</Button>
        </div>

    </>
  );
}
