import "./App.css";
import randomNumber from "./helpers/randomNumber";
import PokemonCard from "./components/PokemonCard/PokemonCard";
function App() {
  const pokemonCards = [];
  for (let i = 0; i < 10; i++) {
    pokemonCards.push(<PokemonCard pokemonNumber={randomNumber(1, 1025)} />);
  }
  return <div className="grid">{pokemonCards}</div>;
}

export default App;
