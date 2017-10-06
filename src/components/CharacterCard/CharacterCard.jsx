import React from 'react';
import Config from 'Config';
import './charactercard.css';

class CharacterCard extends React.Component {

	constructor(props) {
		super();
		this.state = {
			id: props.id,
			info: {}
		}
	}

	componentWillMount() {
		this._fetch(this.state.id);
	}

	_fetch(id) {
		const endpoint = `${Config.apiUrl}people/${id}`;

		fetch(endpoint)
			.then((response) => {
				response.json().then((data) => {
					if (response.status !== 200) {
						console.log(`Error fetching character. Status Code: ${response.status}`);
						return;
					}
					this.setState({
						info: data
					});
				});
			})
			.catch((err) => {
				console.log('Error retrieving data:', err);
			});
	}

	render() {
		return (
			<div className="character-card">
				<div className="character-card-label">{this.props.label}</div>
				<div className="character-card-name">{this.state.info.name}</div>
			</div>
		);
	}
}

export default CharacterCard;
