import { combineReducers } from 'redux';
import search from './Search';
import artist from './Artist';

export default combineReducers({
  search,
  artist
});
