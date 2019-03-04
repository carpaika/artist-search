import { getArtists } from '../services/musicBrainzApi';

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
  return function(dispatch) {
    dispatch(requestArtists(artists));
    return getArtists(artistToSearch, offset)
      .then(res => dispatch(receiveArtists(artists, res)));
    // Above is a second attempt at fetching api using an Action...

    // Below I'm attempting to make an api call directly in the action creator

    // return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistToSearch}&fmt=json&limit=25&offset=${offset}`)
    //   .then(res => {
    //     console.log(res.json());
    //   })
    //   .then(json => dispatch(receiveArtists({
    //     artists: json.artists,
    //     count: json.count,
    //     offset: json.offset
    //   })));  
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
