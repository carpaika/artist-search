import React, { PureComponent } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

export default class Search extends PureComponent {
  state = {
    artists: [],
    artistToSearch: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log('artist', this.state.artistToSearch);
  }

  render() {
    const { artistToSearch } = this.state;
    return (
      <form>
        <label>
          <input type="text" name="artistToSearch" value={artistToSearch} onChange={this.handleChange}></input>
        </label>
        <button>Search</button>
      </form>
    );
  }
}
