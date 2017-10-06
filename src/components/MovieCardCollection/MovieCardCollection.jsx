import React from 'react';
import './moviecardcollection.css';
import MovieCard from '../MovieCard';

class MovieCardCollection extends React.Component {

	render() {
		const movieCollection = this.props.data.map((movie) => {
			return <MovieCard
					episode_id={movie.episode_id}
					title={movie.title}
					director={movie.director}
					key={movie.episode_id}
					characters={movie.characters}/>;
		});

		return (
				<div className="movie-card-container">
					{movieCollection}
				</div>
		);
	}
}

export default MovieCardCollection;
