import React from 'react';
import './home.css';
import MovieCardCollection from '../MovieCardCollection';
import MovieScrollChart from '../MovieScrollChart';
import Config from 'Config';
import {sortBy as _sortBy} from 'lodash';

class Home extends React.Component {

  constructor(props) {
    super();
    this.state = {
      movieData: []
    }
  }

  componentWillMount() {
    this._fetchMovieData();
  }

  _fetchMovieData() {
    const endpoint = Config.apiUrl + 'films';
    fetch(endpoint)
        .then((response) => {
          response.json().then((data) => {
            if (response.status !== 200) {
              console.log(`Error fetching movie data. Status Code: ${response.status}`);
              return;
            }
            this.setState({movieData: data.results});
          });
        })
        .catch((err) => {
          console.log('Error retrieving movie data:', err);
        });
  }

  render() {
    if (!this.state.movieData.length) {
      return <div>Loading ...</div>
    } else {
      const movieCollection = _sortBy(this.state.movieData, 'episode_id');
      return (
          <div className="home-container">
            <div className="home-sidebar">
              <div className="home-favorites">
              </div>
              <div className="home-scroll-chart">
                <MovieScrollChart data={movieCollection} />
              </div>
            </div>
            <div className="home-movie-cards">
              <MovieCardCollection data={movieCollection} />
            </div>
          </div>
      );
    }
  }
}

export default Home;
