import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return <div>
            <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />

            <ul>
              {this.props.pokemon.map((pkmn, idx) => {
                return <PokemonIndexItem key={pkmn.id} pkmn={pkmn} />
              })}

            </ul>
          </div> 
  }
}

export default PokemonIndex