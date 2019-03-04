import { INCREMENT, DECREMENT, ARTISTTOSEARCH_UPDATE } from '../actions/Search';

const initialState = {
  artists: [],
  artistToSearch: '',
  count: 0,
  offset: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
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
