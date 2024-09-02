export function createCardPokemonHorizontal(pokemon) {
  const { name, height, weight, sprites: img, types } = pokemon;
  const element = [
    types[0].type.name,
    types[1] ? types[1].type.name : "",
    types[2] ? types[2].type.name : "",
  ].join(" ");
  return `
  <div>
  <p class="name-card-name">name: ${name}</p>
  <p class="name-card-height">height: ${height * 10}сm</p>
  <p class="name-card-weight">weight: ${weight / 10}kg</p>
  <p class="name-card-element">element: ${element}</p>
  </div>
  <img class="name-card-img" src="${
    img.front_default ? img.front_default : "./img/default_img.jpg"
  }" />`;
}
