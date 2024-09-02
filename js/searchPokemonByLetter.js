import { createSomePokemon } from "./createSomePokemon";
import groupPokemonNameEqualElement from "./groupPokemonNameEqualElement";

export async function searchPokemonByLetter(event) {
  const searchText = event.currentTarget.value;
  const filterGroupPokemon = groupPokemonNameEqualElement.getGroupPokemonEqualElement().filter((name) => {
    for (let i = 0; i < searchText.length; i++) {
      if (!name.includes(searchText)) {
        return false;
      }
    }
    return true;
  });
  createSomePokemon(filterGroupPokemon, "withoutLoading");
}
