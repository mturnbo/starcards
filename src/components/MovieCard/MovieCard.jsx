import React from 'react';
import Character from '../Character';
import './moviecard.css';

class MovieCard extends React.Component {

	render() {
		const posterImage = '/assets/images/StarWarsEpisode' + this.props.episode_id + '.jpg';

		const numCharacters = 3;
		const characters = this.props.characters.slice(0, numCharacters).map((character) => {
			let characterId = character.substring(0, character.lastIndexOf("/")).split("/").pop();
			return <Character id={characterId} key={characterId} />
		});

		return (
			<div className="movie-card">
				<div><img className="movie-poster" src={posterImage} /></div>
				<div className="movie-info">
					<div className="movie-title">{this.props.title}</div>
					<div className="movie-director">Directed by {this.props.director}</div>
					<div>
						Characters:
						<ul>
						{characters}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
