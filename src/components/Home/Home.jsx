import React from 'react';
import './home.css';
import MovieCardCollection from '../MovieCardCollection';
import MovieScrollChart from '../MovieScrollChart';
import Config from 'Config';
import {sortBy as _sortBy} from 'lodash';
import CharacterCard from "../CharacterCard";

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
								<CharacterCard label="Favorite Character" id={11} />
								<CharacterCard label="Least Favorite Character" id={12} />
              </div>
              <div className="home-scroll-chart">
                <MovieScrollChart
									data={movieCollection}
									width={290}
									height={250}
									label="How long are those opening credits?" />
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
