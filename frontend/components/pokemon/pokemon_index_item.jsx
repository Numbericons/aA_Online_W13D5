import React from 'react'
import { Link } from 'react-router-dom';


const PokemonIndexItem = function ({ pkmn }) {
  return <li><Link to={`/pokemon/${pkmn.id}`}>{pkmn.name} <img src={pkmn.image_url} /></Link></li>
}


export default PokemonIndexItem;