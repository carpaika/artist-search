import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { fetchArtists } from './actions/Search';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
const store = createStore(
  reducer,
  enhancer
);

// store.dispatch(fetchArtists()).then(() => console.log(store.getState())
// );

export default store;
