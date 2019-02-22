import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Artists from './Artists.js';
import { getArtists } from '../services/musicBrainzApi';

// import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

export default class Search extends PureComponent {
  state = {
    artists: [],
    artistToSearch: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log('handleChange', this.state.artistToSearch);
  }

  fetchArtists = (event) => {
    event.preventDefault();
    getArtists(this.state.artistToSearch)
      .then(res => {
        this.setState({ artists: res.artists });
        console.log('ARTIST STATE', this.state.artists);
      });
  }

  componentDidMount() {
    console.log('MOUNTED');
  }

  componentDidUpdated() {
    console.log('DIDUPDATE');
  }

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


