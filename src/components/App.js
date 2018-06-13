import React, { Component } from "react";

import CharactersList from "./CharactersList";
import HeroesList from "./HeroesList";

class App extends Component {
	render() {
		return (
			<div>
				<h2>SuperSuqad</h2>
				<CharactersList />
				<h2>Heroes</h2>
				<HeroesList />
			</div>
		);
	}
}

export default App;
