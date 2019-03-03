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

const mapDispatchToProps = dispatch => ({
  onChange: dispatch(updateArtistToSearch),
  onClick: ({ target }) => {
    if(target.name === 'increment') {
      dispatch(incrementCount(1));
    }
    if(target.name === 'decrement') {
      dispatch(decrementCount(1));
    }
  }, 
  onSubmit: dispatch(fetchArtists)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

