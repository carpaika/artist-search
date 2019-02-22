import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Artists({ artists }) {
  const artistList = artists.map(artist => {
    return (
      <Link to={`/artist/${artist.id}`} key={artist.id}>
        <li key={artist.id}>{artist.name}</li>
      </Link>
    );
  });
  return (
    <ul>{artistList}</ul>
  ); 
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired
}; 
