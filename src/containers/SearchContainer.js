/* eslint-disable no-unused-vars */
import { getArtistsState, getArtistToSearch, getCount, getOffset } from '../selectors/Search';
import { fetchArtists, incrementCount, decrementCount, updateArtistToSearch } from '../actions/Search';
import Search from '../components/Search';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  artists: getArtistsState(state),
  artistToSearch: getArtistToSearch(state),
  count: getCount(state),
  offset: getOffset(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChange({ target }) {
    dispatch(updateArtistToSearch(target.value));
  },
  onClick(offset, event) {
    if(event.target.name === 'increment') {
      dispatch(incrementCount(offset));
    }
    if(event.target.name === 'decrement') {
      dispatch(decrementCount(offset));
    }
  }, 
  onSubmit(event, artists, artistToSearch, offset) {
    event.preventDefault();
    dispatch(fetchArtists(artists, artistToSearch, offset));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

