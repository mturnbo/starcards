import React from 'react';
import './moviescrollchart.css';
import {BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

class MovieScrollChart extends React.Component {

  render() {
    const data = this.props.data.map((movie) => {
      return {
        episode_num: movie.episode_id,
        title: movie.title,
        crawl_length: movie.opening_crawl.split(/\s+/).length
      };
    });

    return (
        <div className="movie-scroll-chart">
          <div className="movie-scroll-chart-label">{this.props.label}</div>
          <BarChart width={this.props.width} height={this.props.height} data={data}>
            <XAxis dataKey="episode_num" label="Episodes" padding={{ top: 50 }} />
            <YAxis label="Number of Words"/>
            <Bar name="Number of Words" dataKey="crawl_length" label="Number of Words" fill="#8884d8" />
            <Tooltip label="title" />
          </BarChart>
        </div>
    );
  }
}

export default MovieScrollChart;
