import "./App.css";
import randomNumber from "./helpers/randomNumber"
import PokemonCard from "./components/PokemonCard/PokemonCard";
function App() {
  return (
    <>
      <PokemonCard pokemonNumber={randomNumber(1, 1025)}/>
    </>
  );
}

export default App;
