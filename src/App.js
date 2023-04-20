import { useState } from "react";
import React from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmender"])
  axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
    setPokemon(res.data.results.map(p=>p.name))
  })
  return (
    <div >
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
