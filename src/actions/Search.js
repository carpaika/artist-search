export const ARTISTS_REQUEST = 'ARTISTS_REQUEST';
function requestArtists(artists) {
  return {
    type: ARTISTS_REQUEST,
    payload: artists
  };
}

export const ARTISTS_RECEIVE = 'ARTISTS_RECEIVE';
function receiveArtists(artists, count, offset) {
  return {
    type: ARTISTS_RECEIVE,
    payload: {
      artists,
      count,
      offset
    }
  };
}

export function fetchArtists(artists, artistToSearch, offset) {
  return dispatch => {
    dispatch(requestArtists(artists));
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistToSearch}&fmt=json&limit=25&offset=${offset}`)
      .then(res => res.json())
      .then(json => dispatch(receiveArtists({
        artists: json.artists,
        count: json.count,
        offset: json.offset
      }))); 
  };
}

function shouldFetchArtists(state, artists) {
  const artistArray = state.search[artists];
  if(!artistArray) {
    return true;
  } else if(artistArray.isFetching) {
    return false;
  } else {
    return artistArray.didValidate;
  }
}

export function fetchArtistsIfNeeded(artists) {
  return (dispatch, getState) => {
    if(shouldFetchArtists(getState(), artist)) {
      return dispatch(fetchArtists(artists));
    } else {
      return Promise.resolve();
    }
  };
}

export const INCREMENT = 'INCREMENT';
export const incrementCount = (offset) => ({
  type: INCREMENT,
  payload: offset
});

export const DECREMENT = 'DECREMENT';
export const decrementCount = (offset) => ({
  type: DECREMENT,
  payload: offset
});

export const ARTISTTOSEARCH_UPDATE = 'ARTISTTOSEARCH_UPDATE';
export const updateArtistToSearch = (artistToSearch) => ({
  type: ARTISTTOSEARCH_UPDATE,
  payload: artistToSearch
});

export const ARTISTS_INVALIDATE = 'ARTISTS_INVALIDATE';
export const invalidateArtists = (artists) => ({
  type: ARTISTS_INVALIDATE,
  artists
});
