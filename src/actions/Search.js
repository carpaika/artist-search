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
export const updateArtistToSearch = artistToSearch => ({
  type: ARTISTTOSEARCH_UPDATE,
  payload: artistToSearch
});
