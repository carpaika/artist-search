import { INCREMENT, DECREMENT, ARTISTTOSEARCH_UPDATE } from '../actions/Search';

const initialState = {
  artists: [],
  artistToSearch: '',
  count: 1,
  offset: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload - 1
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
