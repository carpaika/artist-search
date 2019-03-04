import { combineReducers } from 'redux';
import search from './Search';
import artist from './Artist';
import lyrics from './Lyrics';


export default combineReducers({
  search,
  artist,
  lyrics
});
