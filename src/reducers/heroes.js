import characters_json from "../data/characters.json";
import { ADD_CHARACTER } from "../actions/index";

function createCharacter(id) {
	let character = characters_json.find(c => c.id === id);
	return character;
}

export default function heroes(state = [], action) {
	switch (action.type) {
		case ADD_CHARACTER:
			let heroes = [...state, createCharacter(action.id)];
			return heroes;
		default:
			return state;
	}
}
