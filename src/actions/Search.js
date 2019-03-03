export const INCREMENT = 'INCREMENT';
export const incrementCount = count => ({
  type: INCREMENT,
  payload: count
});

export const DECREMENT = 'DECREMENT';
export const decrementCount = count => ({
  type: DECREMENT,
  payload: count
});

export const ARTISTTOSEARCH_UPDATE = 'ARTISTTOSEARCH_UPDATE';
export const updateArtistToSearch = artistToSearch => ({
  type: ARTISTTOSEARCH_UPDATE,
  payload: artistToSearch
});
