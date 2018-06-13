import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroesList extends Component {
  render() {
	return (
		<div>
			<h4>Heroes</h4>
			<ul>
				{
					this.props.heroes.map((hero) => {
						return (
							<li key={hero.id}>
								<div>
									{hero.name}
								</div>
							</li>
						);
					})
				}
			</ul>
		</div>
	)
  }
};

function mapStateToProps(state) {
	return {
		heroes: state.heroes
	}
}

export default connect(mapStateToProps, null)(HeroesList);