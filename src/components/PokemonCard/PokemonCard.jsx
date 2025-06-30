import "./PokemonCard.css";
import { useEffect, useRef, useState } from "react";
import capitalize from "../../helpers/capitalize.js";

export default function PokemonCard({ pokemonNumber, setScore }) {
  const [pokemonData, setPokemonData] = useState();
  const [speciesData, setSpeciesData] = useState();

  const habitat =
    speciesData && speciesData.habitat ? speciesData.habitat.name : "grassland";

  const pokemonName = pokemonData ? capitalize(pokemonData.name) : "Loading...";
  const imageUrl = pokemonData
    ? pokemonData.sprites.other["official-artwork"].front_default
    : "../../../loading.svg";

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
    setScore((lastSet) => {
      const newSet = new Set(lastSet);
      if (!newSet.has(Number(pokemonNumber))) {
        newSet.add(Number(pokemonNumber));
        return newSet;
      } else {
        return new Set();
      }
    });
  }

  return (
    <div
      className="container"
      onClick={handleCardClick}
    >
      <img
        src={imageUrl}
        alt={``}
        className="pokemon_img"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("../../../habitats/${habitat}.png")`,
        }}
      />
      <h1>{pokemonName}</h1>
    </div>
  );
}
