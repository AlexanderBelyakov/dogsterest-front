import "./AllPics.css";
import Card from "../Card/Card";
import IDog from "../../types/dog-type";

function AllPics({
  dogs,
  onCardClick,
}: {
  dogs: IDog[];
  onCardClick: (dog: IDog) => void;
}) {
  return (
    <ul className="all-pics">
      {dogs.map((el) => (
        <Card key={el.id} dog={el} onCardClick={onCardClick} />
      ))}
    </ul>
  );
}

export default AllPics;
