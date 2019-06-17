export const fetchAllPokemon = function() {
  return $.ajax({
    method: 'GET',
    url: "/api/pokemons"
  })
}

export const fetchAPokemon = function(id) {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemons/${id}`
  })
}