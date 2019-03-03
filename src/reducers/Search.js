import { INCREMENT } from '../actions/Search';

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
        count: state.count + 1
      };
    default:
      return state;
  }
}
