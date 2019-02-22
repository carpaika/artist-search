import React, { PureComponent } from 'react';
import Artists from './Artists.js';
import { getArtists } from '../services/musicBrainzApi';
import styles from './css/Search.css';

export default class Search extends PureComponent {
  state = {
    artists: [],
    artistToSearch: '',
    count: 1,
    offset: 0
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  fetchArtists = (event) => {
    event.preventDefault();
    getArtists(this.state.artistToSearch, this.state.offset)
      .then(res => {
        this.setState({ 
          artists: res.artists,
          count: res.count,
          offset: res.offset
        });
      });
  }

  increment = () => {
    this.setState(state => ({ offset: state.offset + 25 }), () => {
      this.fetchArtists(event);
      console.log('artists', this.state.artists);
    });
  }

  decrement = () => {
    this.setState(state => ({ offset: state.offset - 25 }), () => {
      this.fetchArtists(event);
      console.log('artists', this.state.artists);
    });
  }

  render() {

    const { artists, artistToSearch, count, offset } = this.state;
    return (
      <>
      <div className={styles.search}> 
        <h1>SEARCH FOR ARTIST/MUSICIAN</h1>
        <form onSubmit={this.fetchArtists}>
          <label>
            <input type="text" name="artistToSearch" value={artistToSearch} onChange={this.handleChange}></input>
          </label>
          <button>Search</button>
        </form>
        <div>
          {artists.length > 0 && <button onClick={this.decrement}>Page Down</button>}
          {artists.length > 0 && count > offset && <button onClick={this.increment}>Page Up</button>}
        </div>
        {artists.length > 0 && <Artists artists={artists} />}
      </div>
      </>
    );
  }
}


