import { getPokemonByName } from "../service/api";
import { createCardErrorWithoutBox } from "./createCardErrorWithoutBox";
import { createCardPokemonHorizontal } from "./createCardPokemonHorizontal";
import { root } from "./root";
import { sendRequest } from "./sendRequest";

let pastPokemon;

export async function makeCardOfPokemonByName(event) {
  event.preventDefault();
  const name = event.currentTarget.inputName.value;
  event.currentTarget.inputName.value = "";
  if (pastPokemon === name) {
    return;
  }
  pastPokemon = name;
  const dataOfPokemon = await sendRequest(getPokemonByName, name);
  let card;
  if (dataOfPokemon) {
    card = createCardPokemonHorizontal(dataOfPokemon);
  } else {
    card = createCardErrorWithoutBox(name);
  }
  root.cardFoundByName.innerHTML = card;
}
