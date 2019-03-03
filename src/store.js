import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { fetchArtists } from './actions/Search';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(fetchArtists(store.state)).then(() => console.log(store.getState()));

export default store;
