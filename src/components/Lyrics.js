import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../services/musicBrainzApi';

export default class Lyrics extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    lyrics: ''
  }

  fetchLyrics = () => {
    const artistAlter = this.props.match.params.artist.replace(/ /g, '-');
    getLyrics(artistAlter, this.props.match.params.work)
      .then(res => {
        this.setState({
          lyrics: res.lyrics
        });
      });
  }

  componentDidMount() {
    this.fetchLyrics();
  }

  render() {
    return (
      <p>{this.state.lyrics}</p>
      
    );
  }
}

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      work: PropTypes.string.isRequired
    })
  })
};
