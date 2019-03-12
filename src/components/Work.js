import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './css/Work.css';

export default function Work({ artist, work }){
  return (
    <span className={styles.work}>
      <Link to={`/work/${artist}/${work.title}`} key={work.id}>
        <li key={work.id}>{work.title}</li>
      </Link>
    </span>
  );
}

Work.propTypes = {
  work: PropTypes.object.isRequired,
  artist: PropTypes.string.isRequired
};
