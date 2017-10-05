import React from 'react';
import './moviescrollchart.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Config from 'Config';
import {sortBy as _sortBy} from 'lodash';

class MovieScrollChart extends React.Component {

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
		const data = _sortBy(this.state.movieData, 'episode_id').map((movie) => {
			return {
				name: movie.title,
				value: movie.opening_crawl.length
			};
		});

		return (
			<div className="movie-scroll-chart">
				<BarChart width={800} height={250} data={data}>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
				</BarChart>
			</div>);
	}
}

export default MovieScrollChart;
