export async function getPokemonByName(name) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return pokemon.json();
}

export async function getAllPokemonByElement(type) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  return pokemon.json();
}
