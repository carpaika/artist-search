import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './css/Work.css';

export default function Work({ artist, work }){
  return (
    <>
      <Link to={`/work/${artist}/${work.title}`} key={work.id} className={styles.work}>
        <li key={work.id}>{work.title}</li>
      </Link>
    </>
  );
}

Work.propTypes = {
  work: PropTypes.object.isRequired,
  artist: PropTypes.string.isRequired
};
