import "./Card.css";
import { useLocation } from "react-router-dom";
import IDog from "../../types/dog-type";

function Card({
  dog,
  onCardClick,
}: {
  dog: IDog;
  onCardClick: (dog: IDog) => void;
}) {
  const location = useLocation();
  return (
    <li className="card">
      <img src={dog.link} alt="pic" className="card__image" />
      {location.pathname === "/" && (
        <button
          onClick={() => onCardClick(dog)}
          type="button"
          className="card__save-button"
        >
          save
        </button>
      )}
    </li>
  );
}

export default Card;
