import { useEffect, useState } from "react";
import AllPics from "../AllPics/AllPics";
import Header from "../Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import api from "../../utils/dogsApi";
import SavedPics from "../SavedPics/SavedPics";
import IDog from "../../types/dog-type";

function App() {
  const [dogs, setDogs] = useState([]);
  const [savedDogs, setSavedDogs] = useState([]);
  useEffect(() => {
    api.getData().then((res) => setDogs(res));
    api.getSavedData().then((res) => setSavedDogs(res));
  });

  function handleCardClick(dogCard: IDog) {
    api.saveCard(dogCard.id, dogCard.link);
  }
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AllPics dogs={dogs} onCardClick={handleCardClick} />
            </>
          }
        />
        <Route
          path="/saved"
          element={
            <>
              <Header />
              <SavedPics dogs={savedDogs} onCardClick={handleCardClick} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
