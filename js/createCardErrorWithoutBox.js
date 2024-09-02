export function createCardErrorWithoutBox(text) {
  return `
    <div>
        <h2 class="error-title">ERROR</h2>
        <p class="error-text">Oops...</p>
        <p class="error-text">Couldn't find anything for name: ${text}</p>
    </div>
    <img class="error-img" src="./img/shockedPokemon.jpg" />
    `;
}
