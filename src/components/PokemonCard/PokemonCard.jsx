import "./PokemonCard.css";
import { useEffect, useState } from "react";
import capitalize from "../../helpers/capitalize.js";
import shuffleArray from "../../helpers/shuffleArray.js";

export default function PokemonCard({
  size,
  pokemonNumber,
  setScore,
  setCards,
}) {
  const [pokemonData, setPokemonData] = useState();
  const [speciesData, setSpeciesData] = useState();
  const [clickedPokemons, setClickedPokemons] = useState({});
  const habitat =
    speciesData && speciesData.habitat ? speciesData.habitat.name : "grassland";

  const pokemonName = pokemonData ? capitalize(pokemonData.name) : "Loading...";
  const imageUrl = pokemonData
    ? pokemonData.sprites.other["official-artwork"].front_default
    : "../../../public/loading.svg";

  useEffect(() => {
    (async (url) => {
      fetch(url)
        .then((res) => {
          res.json().then((data) => {
            setPokemonData(data);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    })(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`);
  }, []);

  useEffect(() => {
    if (pokemonData) {
      (async (url) => {
        fetch(url)
          .then((res) => {
            res.json().then((data) => {
              setSpeciesData(data);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })(pokemonData.species.url);
    }
  }, [pokemonData]);
  function handleCardClick() {
    if (clickedPokemons[pokemonNumber] === undefined) {
      setClickedPokemons({
        ...clickedPokemons,
        [pokemonNumber]: 1,
      });
      let score = 0;
      setScore((lastScore) => {
        score = lastScore + 1;
        return lastScore + 1;
      });
      if (score == size) {
        alert("You win!");
      }
    } else {
      setScore(0);
      setClickedPokemons({});
    }
    setCards((oldCards) => {
      const shuffle = shuffleArray(oldCards);
      return shuffle;
    });
  }

  return (
    <div className="container" onClick={() => handleCardClick()}>
      <img
        src={imageUrl}
        alt={``}
        className="pokemon_img"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("../../../public/habitats/${habitat}.png")`,
        }}
      />
      <h1>{pokemonName}</h1>
    </div>
  );
}
