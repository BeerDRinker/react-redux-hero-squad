import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';

import { addCharacterById } from '../actions/index';

class CharactersList extends Component {
	render() {
		return;
		return (
			<div>
				<h2>Characters</h2>
				<ul>
					{
						this.props.characters.map(character => {
							return (
								<li key={character.id}>
									<div>{character.name}</div>
									<div onClick={() => this.props.addCharacterById(character.id)}>
										x
									</div>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
 }
 
export default CharactersList;
function mapStateToProps(state) {
	return {
		characters: state.characters
	};
}


// FULL SINTAX FOR mapDispatchToPRops

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ addCharacterById }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);

// ShortCut for mapDispatch to props

export default connect(mapStateToProps, { addCharacterById })(CharactersList); 