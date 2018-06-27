import characters_json from "../data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/index";

function createCharacter(id) {
	let character = characters_json.find(c => c.id === id);
	return character;
}

export default function characters(state = characters_json, action) {
	switch (action.type) {
		case ADD_CHARACTER:
			let characters = state.filter(item => item.id !== action.id);
			return characters;
		case REMOVE_CHARACTER:
			let heroes = [...state, createCharacter(action.id)];
			return heroes;
		default:
			return state;
	}
}
