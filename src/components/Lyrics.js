import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../services/musicBrainzApi';
import { Link } from 'react-router-dom';

export default class Lyrics extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    lyrics: ''
  }

  fetchLyrics = () => {
    const artistAlter = this.props.match.params.artist.replace(/ /g, '-');
    const workAlter = this.props.match.params.work.replace(/ /g, '-');
    console.log(workAlter);
    getLyrics(artistAlter, workAlter)
      .then(res => {
        if(res.lyrics) {
          this.setState({
            lyrics: res.lyrics.split('Paroles de la chanson ')
          });
        }
        else {
          this.setState({
            lyrics: 'Could not fetch lyrics for this song. Please try again.'
          });
        }
      });
  }

  componentDidMount() {
    console.log('hello?');
    this.fetchLyrics();
  }

  render() {
    return (
      <>
        <p>{this.state.lyrics}</p>
        <Link to='/'>Return to search</Link>
      </>
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
