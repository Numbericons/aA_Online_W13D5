import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestAPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => ({
   pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
})

const mapDispatchToProps = (dispatch) => ({
  requestAPokemon: (id) => dispatch(requestAPokemon(id))
});

const connection = connect(mapStateToProps, mapDispatchToProps);
const PokemonDetailContainer = connection(PokemonDetail);
export default PokemonDetailContainer;

