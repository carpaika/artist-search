import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styles from './css/Artists.css';

export default function Artists({ artists }) {
  const artistList = artists.map(artist => {
    return (
      <>
      <Router>
        <Link to={`/artist/${artist.id}`} key={artist.id}>
          <li key={artist.id}>{artist.name}</li>
        </Link>
      </Router>
      </>
    );
  });
  return (
    <ul className={styles.artists}>{artistList}</ul>
  ); 
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired
}; 
