import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount () {
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
      if (prevProps.match.params.pokemonId != this.props.match.params.pokemonId) {
        this.props.requestAPokemon(this.props.match.params.pokemonId)
      }
  }

  showPokemon(pkmn) { //sometimes pkmn is undefined. pkmn.poke_type will break
    if (pkmn.poke_type) {    //added .poke_type to make sure it wasn't the one from index
      debugger;
      return <div>
              <img src={pkmn.image_url} />
              <h1>{pkmn.name}</h1>
              <ul>
                <li>Type: {pkmn.type}</li>
                <li>Attack: {pkmn.attack}</li>
                <li>Defense: {pkmn.defense}</li>
                <li>Moves: {pkmn.moves.join(", ")}</li>
              </ul>
            </div>
    }
    return 'Loading...'
  }

  render() {
    return <section>
            {this.showPokemon(this.props.pokemon)}
          </section>
  }
}



export default PokemonDetail

    