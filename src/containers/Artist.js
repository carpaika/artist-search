/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { getWorks, getArtistState } from '../selectors/Artist';
import { connect } from 'react-redux';
import Work from '../components/Work';
import styles from '../components/css/Artist.css';

const mapStateToProps = (state) => ({
  artist: getArtistState(state),
  works: getWorks(state)
});

export default connect(
  mapStateToProps
)(Artist);

function Artist({ artist, works }) {
  const worksList = works.map(work => {
    return (
      <Work artist={artist} work={work} key={work.id}/>
    );
  });
  return (
      <>
      <div className={styles.artist}>
        <h1>{artist}</h1>
        <ul>
          {worksList}
        </ul>
      </div>
      </>
  );
}

Artist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};


