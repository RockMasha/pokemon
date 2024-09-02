export function crateCardPokemonVertical(pokemon) {
  const { name, height, weight, sprites: img, types } = pokemon;
  const element = [
    types[0].type.name,
    types[1] ? types[1].type.name : "",
    types[2] ? types[2].type.name : "",
  ].join(" ");
  return `         
    <li class="element-list-item">
    <img
      class="element-list-item-img"
      src="${img.front_default ? img.front_default : "./img/default_img.jpg"}"
    />
    <p class="element-list-item-name">name: ${name}</p>
    <p class="element-list-item-height">height: ${height * 10}cm</p>
    <p class="element-list-item-weight">weight: ${weight / 10}kg</p>
    <p class="element-list-item-element">element: ${element}</p>
  </li>`;
}
