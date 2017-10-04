import React from 'react';
import Config from 'Config';

class Card extends React.Component {

	constructor(props) {
		super();
		this.state = {
			info: {}
		}
	}

	componentWillMount() {
		this._fetch(this.props.resource, this.props.id);
	}

	_fetch(resource, id) {
		const endpoint = Config.apiUrl + resource + '/' + id;

		fetch(endpoint)
			.then((response) => {
				response.json().then((data) => {
					if (response.status !== 200) {
						console.log(`Error fetching ${resource}/${id}. Status Code: ${response.status}`);
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
			<div>
				{this.state.info.url}
			</div>);
	}
}

export default Card;
