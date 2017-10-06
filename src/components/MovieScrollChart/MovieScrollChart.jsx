import React from 'react';
import './moviescrollchart.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';

class MovieScrollChart extends React.Component {

	render() {
		const data = this.props.data.map((movie) => {
			return {
				name: movie.episode_id,
				crawl_length: movie.opening_crawl.length
			};
		});

		return (
				<div className="movie-scroll-chart">
					<div className="movie-scroll-chart-label">{this.props.label}</div>
					<BarChart width={this.props.width} height={this.props.height} data={data}>
						<XAxis dataKey="name"/>
						<YAxis/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Bar dataKey="crawl_length" fill="#8884d8" />
						<Legend />
					</BarChart>
				</div>
		);
	}
}

export default MovieScrollChart;
