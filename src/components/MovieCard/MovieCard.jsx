import React from 'react';
import './moviecard.css';

class MovieCard extends React.Component {

	render() {
		const posterImage = '/assets/images/StarWarsEpisode' + this.props.episode_id + '.jpg';

		console.log('>>>> CHARACTER COUNT:', this.props.characters);

		return (
			<div className="movie-card">
				<div><img className="movie-poster" src={posterImage} /></div>
				<div className="movie-info">
					<div className="movie-title">{this.props.title}</div>
					<div className="movie-director">Directed by {this.props.director}</div>
					<div>Characters:</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
