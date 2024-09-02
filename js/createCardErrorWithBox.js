export function createCardErrorWithBox(text) {
  return `
    <div class="error">
        <div>
            <h2 class="error-title">ERROR</h2>
            <p class="error-text">Oops...</p>
            <p class="error-text">Couldn't find anything for element:</p>
            <p class="error-text">${text}</p>
        </div>
        <img class="error-img" src="./img/shockedPokemon.jpg" />
    <div>`;
}
