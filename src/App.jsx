import "./App.css";
import randomNumber from "./helpers/randomNumber.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);

  const pokemonCards = [];
  const pokemonIds = {};

  for (let i = 0; i < 10; i++) {
    const pokemonNumber = randomNumber(1, 1025);
    if (pokemonIds[pokemonNumber] !== 1) {
      pokemonCards.push(
        <PokemonCard key={pokemonNumber} pokemonNumber={pokemonNumber} />
      );
      pokemonIds[pokemonNumber] = 1;
    }
  }
  return (
    <>
      <div className="horizontal-container">
        <div className="horizontal-container">
          <img src="../public/pokemon_icon.png" alt="" className="logo" />
          <div>
            <h1 style={{ fontSize: "xx-large" }}>Memory Game!</h1>
            <p>Select all images without selecting the same one twice.</p>
            <p>Once you've selected all the images you win!</p>
          </div>
        </div>
        <h1 style={{ marginInlineEnd: "3rem" }}>Score: {score}</h1>
      </div>
      <div className="grid">{pokemonCards}</div>
    </>
  );
}

export default App;
