import React from 'react';
import MovieCard from '../MovieCard';
import Config from 'Config';

class App extends React.Component {

	constructor(props) {
		super();
		this.state = {
			movieData: []
		}
	}

	componentWillMount() {
		this._fetch();
	}

	_fetch() {
		const endpoint = Config.apiUrl + 'films';
		fetch(endpoint)
			.then((response) => {
				response.json().then((data) => {
					if (response.status !== 200) {
						console.log(`Error fetching data. Status Code: ${response.status}`);
						return;
					}
					this.setState({movieData: data.results});
				});
			})
			.catch((err) => {
				console.log('Error retrieving data:', err);
			});
	}

	render() {
		const movieCollection = this.state.movieData.map((movie) => {
			return <MovieCard episode_id={movie.episode_id} title={movie.title} director={movie.director} key={movie.episode_id} characters={movie.characters}/>;
		});

		return (
			<div>
				<h1>Star Cards</h1>
				<hr />
				{movieCollection}
			</div>);
	}
}

export default App;
