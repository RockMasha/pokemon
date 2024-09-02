let groupPokemonNameEqualElement;

function getGroupPokemonEqualElement() {
    return groupPokemonNameEqualElement
}

function deleteGroupPokemonEqualElement() {
    groupPokemonNameEqualElement =[];
}

function updateGroupPokemonEqualElement(data) {
    groupPokemonNameEqualElement = data;
}


export default {
    getGroupPokemonEqualElement,
    deleteGroupPokemonEqualElement,
    updateGroupPokemonEqualElement,
}
