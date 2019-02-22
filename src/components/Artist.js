import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getArtist } from '../services/musicBrainzApi';
import Work from './Work';

export default class Artist extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    artist: '',
    works: []
  }

  fetchWorks = () => {
    getArtist(this.props.match.params.id)
      .then(res => {
        this.setState({
          artist: res.artist,
          works: res.works
        });
      });
  }

  componentDidMount() {
    this.fetchWorks();
  }

  render() {
    const worksList = this.state.works.map(work => {
      return (
        <Work artist={this.state.artist} work={work} key={work.id}/>
      );
    });
    return (
      <>
      <h1>{this.state.artist}</h1>
      <ul>
        {worksList}
      </ul>
      </>
    );
  }
}

Artist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};


