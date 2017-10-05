import React from 'react';
import './moviescrollchart.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class MovieScrollChart extends React.Component {

	render() {
		const data = this.props.data.map((movie) => {
			return {
				name: movie.title,
				pv: movie.opening_crawl.length
			};
		});

		return (
				<div className="movie-scroll-chart">
					<BarChart width={200} height={250} data={data}>
						<XAxis dataKey="name"/>
						<YAxis/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Bar dataKey="pv" fill="#8884d8" />
					</BarChart>
				</div>
		);
	}
}

export default MovieScrollChart;
