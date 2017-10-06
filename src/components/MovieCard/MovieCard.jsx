import React from 'react';
import Movie from '../Movie';
import './moviecard.css';

class MovieCard extends React.Component {
	render() {
		const movies = this.props.movies.map((movie) => {
			return (
				<Movie
					episode_id={movie.episode_id}
					title={movie.title}
					director={movie.director}
					characters={movie.characters} />
			);
		});

		return (
			<div className="movie-card">
				{movies}
			</div>
		);
	}
}

export default MovieCard;
