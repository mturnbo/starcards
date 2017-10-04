import React from 'react';

class MovieCard extends React.Component {

	render() {
		const posterImage = '/assets/images/StarWarsEpisode' + this.props.episode_id + '.jpg';

		console.log('>>>> CHARACTER COUNT:', this.props.characters);

		return (
			<div>
				<div><img src={posterImage} /></div>
				<div>{this.props.title}</div>
				<div>Directed by {this.props.director}</div>
				<div>Characters:</div>
			</div>
		);
	}
}

export default MovieCard;
