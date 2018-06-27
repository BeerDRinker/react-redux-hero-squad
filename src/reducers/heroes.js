import characters_json from "../data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/index";

function createCharacter(id) {
	let character = characters_json.find(c => c.id === id);
	return character;
}

export default function heroes(state = [], action) {
	switch (action.type) {
		case ADD_CHARACTER:
			let heroes = [...state, createCharacter(action.id)];
			return heroes;
		case REMOVE_CHARACTER:
			let characters = state.filter(item => item.id !== action.id);
			return characters;
		default:
			return state;
	}
}
