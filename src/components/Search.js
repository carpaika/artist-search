/* eslint-disable no-unused-vars */
import React from 'react';
import Artists from '../components/Artists.js';
import styles from './css/Search.css';
import PropTypes from 'prop-types';

function Search({ artists, artistToSearch, count, offset, onChange, onClick, onSubmit }) {
  console.log('Search props:', onChange, onClick, artists, artistToSearch, count, offset, onSubmit);
  return (
    <>
    <div className={styles.search}> 
      <h1>SEARCH FOR ARTIST/MUSICIAN</h1>
      <form onSubmit={onSubmit}>
        <label>
          <input type="text" name="artistToSearch" value={artistToSearch} onChange={onChange}></input>
        </label>
        <button>Search</button>
      </form>
      <div>
        {artists.length > 0 && count > 25 && <button onClick={onClick} name='decrement'>Page Down</button>}
        {artists.length > 0 && count > 25 && count > offset && <button onClick={onClick} name='increment'>Page Up</button>}
        {artists.length > 0 && <Artists artists={artists} />}
      </div>
    </div>
    </>
  );
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  artists: PropTypes.array.isRequired,
  artistToSearch: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired
};

export default Search;
