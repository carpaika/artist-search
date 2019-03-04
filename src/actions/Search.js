export const ARTISTS_REQUEST = 'ARTISTS_REQUEST';
function requestArtists(artists) {
  return {
    type: ARTISTS_REQUEST,
    artists
  };
}

export const ARTISTS_RECEIVE = 'ARTISTS_RECEIVE';
function receiveArtists(artists, count, offset) {
  return {
    type: ARTISTS_RECEIVE,
    artists,
    count,
    offset
  };
}

export function fetchArtists() {
  return function(dispatch, state) {
    dispatch(requestArtists(state.artists));
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${state.artistToSearch}&fmt=json&limit=25&offset=${state.offset}`)
      .then(res => res.json(),
        error => console.error('ERROR!: ', error)
      )
      .then(json => dispatch(receiveArtists({
        artists: json.artists,
        count: json.count,
        offset: json.offset
      })));  
  };
}

export const ARTISTS_INVALIDATE = 'ARTISTS_INVALIDATE';
export const invalidateArtists = (artists) => ({
  type: ARTISTS_INVALIDATE,
  artists
});

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
