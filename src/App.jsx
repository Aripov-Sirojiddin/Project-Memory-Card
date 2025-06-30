import "./App.css";
import randomNumber from "./helpers/randomNumber.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";
import { useEffect, useState } from "react";
import RestartModal from "./components/RestartModal/RestartModal.jsx";
import shuffleArray from "./helpers/shuffleArray.js";

function App() {
  const [score, setScore] = useState(new Set());
  const [cards, setCards] = useState([]);

  const size = 10;
  
  useEffect(() => {
    setCards((oldCards) => {
      const shuffle = shuffleArray(oldCards);
      return shuffle;
    });
  }, [score]);

  function generateCards() {
    const pokemonCards = [];
    const pokemonIds = {};
    while (pokemonCards.length < size) {
      const pokemonNumber = randomNumber(1, 1025);
      if (pokemonIds[pokemonNumber] !== 1) {
        pokemonCards.push(
          <PokemonCard
            key={pokemonNumber}
            pokemonNumber={pokemonNumber}
            score={score}
            setScore={setScore}
            setCards={setCards}
            onClick={() => handleCardClick(pokemonNumber)}
          />
        );
        pokemonIds[pokemonNumber] = 1;
      }
    }
    return pokemonCards;
  }

  if (cards.length === 0) {
    setCards(generateCards());
  }

  return (
    <>
      {score.size == 10 && (
        <RestartModal setScore={setScore} setCards={setCards} />
      )}
      <div className="horizontal-container">
        <div className="horizontal-container">
          <img src="../pokemon-title.png" alt="" className="logo" />
          <div>
            <h1 style={{ fontSize: "xx-large" }}>Memory Game!</h1>
            <p>Select all images without selecting the same one twice.</p>
            <p>Once you've selected all the images you win!</p>
          </div>
        </div>
        <h1 style={{ marginInlineEnd: "3rem" }}>Score: {score.size}</h1>
      </div>
      <div className="grid">{cards}</div>
    </>
  );
}

export default App;
