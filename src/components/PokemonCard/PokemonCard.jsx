import "./PokemonCard.css";
import randomNumber from "../../helpers/randomNumber.js";
import { useEffect, useState } from "react";
import capitalize from "../../helpers/capitalize.js";
export default function PokemonCard({ pokemonNumber }) {
  const [pokemonName, setPokemonName] = useState("Loading...");
  const [imageUrl, setImageUrl] = useState("../../../public/loading.svg");

  useEffect(() => {
    (async (url) => {
      fetch(url)
        .then((res) => {
          res.json().then((data) => {
            console.log(data);
            setImageUrl(data.sprites.other["official-artwork"].front_default);
            setPokemonName(capitalize(data.name));
          });
        })
        .catch((error) => {
          console.log(error);
        });
    })(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`);
  }, []);
  return (
    <div className="container">
      <img src={imageUrl} alt={``} />
      <h1>{pokemonName}</h1>
    </div>
  );
}
