import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Artists from './Artists.js';
import { getArtists } from '../services/musicBrainzApi';

// import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

export default class Search extends PureComponent {
  state = {
    artists: [],
    artistToSearch: '',
    count: 0,
    offset: 0
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  fetchArtists = (event) => {
    event.preventDefault();
    getArtists(this.state.artistToSearch)
      .then(res => {
        this.setState({ artists: res.artists });
      });
  }

  // componentDidMount() {
  //   console.log('MOUNTED');
  // }

  // componentDidUpdated() {
  //   console.log('DIDUPDATE');
  // }

  render() {

    const { artists, artistToSearch } = this.state;
    return (
      <>
      <form onSubmit={this.fetchArtists}>
        <label>
          <input type="text" name="artistToSearch" value={artistToSearch} onChange={this.handleChange}></input>
        </label>
        <button>Search</button>
      </form>
      {artists && <Artists artists={artists} />}
      </>
    );
  }
}


