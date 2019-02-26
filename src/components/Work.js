import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styles from './css/Work.css';

export default function Work({ artist, work }){
  return (
    <>
    <Router>
      <Link to={`/work/${artist}/${work.title}`} key={work.id} className={styles.work}>
        <li key={work.id}>{work.title}</li>
      </Link>
    </Router>
    </>
  );
}

Work.propTypes = {
  work: PropTypes.object.isRequired,
  artist: PropTypes.string.isRequired
};
