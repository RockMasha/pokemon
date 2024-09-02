import { makeCardOfPokemonByName } from "./js/makeCardOfPokemonByName";
import { makeCardsOfPokemonByElement } from "./js/makeCardsOfPokemonByElement";
import { root } from "./js/root";

// https://pokeapi.co/api/v2/pokemon?offset=20&limit=1302

root.formName.addEventListener("submit", makeCardOfPokemonByName);

root.formElement.addEventListener("submit", makeCardsOfPokemonByElement);
