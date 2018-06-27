import { combineReducers } from "redux";

import characters from "./characters";
import heroes from "./heroes";

export default combineReducers({
	characters,
	heroes
});

//https://github.com/15Dkatz/redux-collection-guides
//https://coursehunters.net/course/react-js-osvoenie-redux
