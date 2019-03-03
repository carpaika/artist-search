import { getArtists } from '../services/musicBrainzApi';

export const getArtistToSearch = state => state.getArtistToSearch;
export const getCount = state => state.count;
export const getOffset = state => state.offset;

export const getArtistsState = state => {
  const artist = getArtistToSearch(state);
  const offset = getOffset(state);
  const fetchedData = getArtists(artist, offset);

  console.log('fetchedData:', fetchedData);
  state.artists = fetchedData.artists;
  state.count = fetchedData.count;
  state.offset = fetchedData.offset;
  console.log('getArtistsState returns:', state.artists, state.count, state.offset);

  return state.artists, state.count, state.offset;
};

