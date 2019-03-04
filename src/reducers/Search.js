import { INCREMENT, DECREMENT, ARTISTTOSEARCH_UPDATE, ARTISTS_REQUEST, ARTISTS_RECEIVE } from '../actions/Search';

const initialState = {
  artists: [],
  artistToSearch: '',
  count: 0,
  offset: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ARTISTS_REQUEST:
      return {
        ...state,
        artists: action.payload
      };
    case ARTISTS_RECEIVE:
      return {
        ...state,
        artists: [...action.payload.artists],
        count: action.payload.count,
        offset: action.payload.offset
      };
    case INCREMENT:
      return {
        ...state,
        offset: action.payload + 25
      };
    case DECREMENT:
      return {
        ...state,
        offset: action.payload - 25
      };
    case ARTISTTOSEARCH_UPDATE:
      return {
        ...state,
        artistToSearch: action.payload
      };
    default:
      return state;
  }
}
