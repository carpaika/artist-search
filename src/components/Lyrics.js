/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getLyricsState } from '../selectors/Lyrics';
import { Link } from 'react-router-dom';
import { getLyrics } from '../services/musicBrainzApi';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Lyrics extends PureComponent {

  componentDidMount() {
    this.props.actions.fetchLyrics();
  }

  fetchLyrics = () => {
    const artistAlter = this.props.match.params.artist.replace(/ /g, '-');
    const workAlter = this.props.match.params.work.replace(/ /g, '-');
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
  };

  render() {
    return (
        <>
          <p>{this.state.lyrics}</p>
          <Link to='/'>Return to search</Link>
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  lyrics: getLyricsState(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(dispatch)
});

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      work: PropTypes.string.isRequired
    })
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lyrics);
