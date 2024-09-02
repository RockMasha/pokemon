export function createEntryFilterField() {
  return `<form class="filterField">
    <h2 class="filterField-title">Filter pokemons</h2>
    <input
      id="searchLetter"
      class="filterField-enter"
      name="inputName"
      type="text"
      placeholder="Enter pokemon name"
    />
  </form>`;
}
