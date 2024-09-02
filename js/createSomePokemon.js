import { getPokemonByName } from "../service/api";
import { crateCardPokemonVertical } from "./crateCardPokemonVertical";
import { root } from "./root";
import { sendRequest } from "./sendRequest";

export async function createSomePokemon(groupPokemon, way) {
  const cardsOfPokemon = await Promise.all(
    groupPokemon
      .filter((item, index) => index < 10)
      .map((item) => way === "withoutLoading" ? getPokemonByName(item) : sendRequest(getPokemonByName, item))
  );
  root.listElByElement.innerHTML = cardsOfPokemon
    .map(crateCardPokemonVertical)
    .join("");
  return cardsOfPokemon;
}
