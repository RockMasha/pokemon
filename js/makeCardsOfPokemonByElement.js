import { getAllPokemonByElement } from "../service/api";
import { createSomePokemon } from "./createSomePokemon";
import { setEntryFilterField } from "./setEntryFilterField";
import { sendRequest } from "./sendRequest";
import { root } from "./root";
import { createCardErrorWithBox } from "./createCardErrorWithBox";
import groupPokemonNameEqualElement from "./groupPokemonNameEqualElement";
import { deleteEntryFilterField } from "./deleteEntryFilterField";

export async function makeCardsOfPokemonByElement(event) {
  event.preventDefault();
  const element = event.currentTarget.inputElement.value;
  event.currentTarget.inputElement.value = "";
  const groupPokemonByElement = await sendRequest(
    getAllPokemonByElement,
    element
  );
  const enterField = document.querySelector("#searchLetter");
  if (!groupPokemonByElement) {
    const card = createCardErrorWithBox(element);
    root.listElByElement.innerHTML = card;
    groupPokemonNameEqualElement.deleteGroupPokemonEqualElement();
    if (enterField) {
      deleteEntryFilterField()
    }
    return;
  }
  groupPokemonNameEqualElement.updateGroupPokemonEqualElement(
    groupPokemonByElement.pokemon.map((item) => item.pokemon.name)
  );
  createSomePokemon(groupPokemonNameEqualElement.getGroupPokemonEqualElement());
  if (!enterField) {
    setEntryFilterField();
    return;
  }
  enterField.value = "";
}
