import "./SavedPics.css";
import Card from "../Card/Card";
import IDog from "../../types/dog-type";

function SavedPics({
  dogs,
  onCardClick,
}: {
  dogs: IDog[];
  onCardClick: (dog: IDog) => void;
}) {
  return (
    <ul className="all-pics">
      {dogs &&
        dogs.map((el) => (
          <Card key={el.id} dog={el} onCardClick={onCardClick} />
        ))}
    </ul>
  );
}

export default SavedPics;
