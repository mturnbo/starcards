import React from 'react';
import './moviecardcollection.css';
import MovieCard from '../MovieCard';
import Config from 'Config';
import {sortBy as _sortBy} from 'lodash'

class MovieCardCollection extends React.Component {

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
						console.log(`Error fetching movies. Status Code: ${response.status}`);
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
		const movieCollection = _sortBy(this.state.movieData, 'episode_id').map((movie) => {
			return <MovieCard episode_id={movie.episode_id} title={movie.title} director={movie.director}
												key={movie.episode_id} characters={movie.characters}/>;
		});

		return (
			<div className="movie-card-container">
				{movieCollection}
			</div>);
	}
}

export default MovieCardCollection;
