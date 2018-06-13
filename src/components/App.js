import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		squad: state.characters
	};
};

class appCompnent extends Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.squad.map(hero => <li key={hero.id}>{hero.name}</li>)}
				</ul>
			</div>
		);
	}
}

const App = connect(mapStateToProps)(appCompnent);

export default App;
