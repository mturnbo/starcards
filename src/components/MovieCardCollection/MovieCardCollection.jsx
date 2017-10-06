import React from 'react';
import './moviecardcollection.css';
import MovieCard from '../MovieCard';

class MovieCardCollection extends React.Component {

	render() {

		let movieCollection = [];
		for (var i = 0; i < this.props.data.length; i += 2) {
			let movies = []
			movies.push(
				{
				episode_id: this.props.data[i].episode_id,
				title: this.props.data[i].title,
				director: this.props.data[i].director,
				characters: this.props.data[i].characters
				}
			);
			if (typeof this.props.data[i + 1] !== 'undefined') {
				movies.push(
					{
						episode_id: this.props.data[i + 1].episode_id,
						title: this.props.data[i + 1].title,
						director: this.props.data[i + 1].director,
						characters: this.props.data[i + 1].characters
					}
				);
			}

			movieCollection.push(<MovieCard movies={movies} />);
		}

		return (
				<div className="movie-card-container">
					{movieCollection}
				</div>
		);
	}
}

export default MovieCardCollection;
