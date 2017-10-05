import React from 'react';
import Config from 'Config';
import './character.css';

class Character extends React.Component {

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
			<li className="character">{this.state.info.name}</li>
		);
	}
}

export default Character;
