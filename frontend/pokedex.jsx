import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions.js';
import * as Util from './util/api_util';
import { pokemonReducer } from './reducers/pokemon_reducer';
import configureStore from './store/store';
import { requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

const Root = () => {
    return <h1>root - hello!</h1>
}
document.addEventListener("DOMContentLoaded", function () {
  let root = document.getElementById("root");
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // ReactDom.render(< Root />, root)
  // const getSuccess = pokemon => console.log(pokemonReducer({},receiveAllPokemon(pokemon)));
  // fetchAllPokemon().then(getSuccess);
  // debugger
  console.log(store.getState());
  dispatch(requestAllPokemon());
  debugger
  ReactDOM.render(<Root store={store} />, root)
})

  window.selectAllPokemon = selectAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = Util.fetchAllPokemon;
  

