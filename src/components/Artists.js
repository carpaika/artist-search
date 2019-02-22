import React from 'react';
import PropTypes from 'prop-types';

export default function Artists({ artists }) {
  const artistList = artists.map(artist => {
    return (
      <li key={artist.id} >{artist.name}</li>
    );
  });
  return (
    <ul>{artistList}</ul>
  ); 
}

Artists.propTypes = {
  artists: PropTypes.array.isRequired
}; 
