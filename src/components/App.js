import React, { Component } from "react";

import CharactersList from "./CharactersList";
import HeroesList from "./HeroesList";
import "../styles/index.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2>Super Suqad</h2>
				<div className="col-md-6">
					<CharactersList />
				</div>
				<div className="col-md-6">
					<HeroesList />
				</div>
			</div>
		);
	}
}

export default App;
