import "./App.css";
import randomNumber from "./helpers/randomNumber.js";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";
function App() {
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
  return <div className="grid">{pokemonCards}</div>;
}

export default App;
