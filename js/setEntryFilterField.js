import { createEntryFilterField } from "./createEntryFilterField";
import { root } from "./root";
import { searchPokemonByLetter } from "./searchPokemonByLetter";

export function setEntryFilterField() {
  const field = createEntryFilterField();
  root.formElement.insertAdjacentHTML("afterend", field);
  const input = document.querySelector("#searchLetter");
  input.addEventListener("input", searchPokemonByLetter);
}
