import React from 'react';



class PokemonIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    return <ul>
            {this.props.pokemon.map((pkmn, idx) => {
              return <li key={pkmn.id}>{pkmn.name} <img src={pkmn.image_url} /> </li>
            })}

          </ul>
  }
}

export default PokemonIndex