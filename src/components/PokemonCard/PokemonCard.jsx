import "./PokemonCard.css";
import randomNumber from "../../helpers/randomNumber.js";
import { useEffect, useState } from "react";
import capitalize from "../../helpers/capitalize.js";
export default function PokemonCard({ pokemonNumber }) {
  const [pokemonData, setPokemonData] = useState();
  const [speciesData, setSpeciesData] = useState();

  const color = speciesData ? speciesData.color.name : "white";
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
  return (
    <div className="container" style={{ backgroundImage: `linear-gradient(135deg, white, ${color})` }}>
      <img src={imageUrl} alt={``} />
      <h1>{pokemonName}</h1>
    </div>
  );
}
