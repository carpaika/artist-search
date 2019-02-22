import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Work({ artist, work }){
  return (
    <Link to={`/work/${artist}/${work.title}`} key={work.id}>
      <li key={work.id}>{work.title}</li>
    </Link>
  );
}

Work.propTypes = {
  work: PropTypes.object.isRequired,
  artist: PropTypes.string.isRequired
};
