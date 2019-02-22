import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Artists from './Artists.js';
import { getArtists } from '../services/musicBrainzApi';

// import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

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
      console.log('offset up', this.state.offset);
    });
  }

  decrement = () => {
    this.setState(state => ({ offset: state.offset - 1 }), () => {
      console.log('offset down', this.state.offset);
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
      {artists.length && <button onClick={this.decrement}>Page Down</button>}
      {artists.length && <button onClick={this.increment}>Page Up</button>}
      {artists.length && <Artists artists={artists} />}
      </>
    );
  }
}


