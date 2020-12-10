import { compose, createStore } from 'redux';
import reducers from '../reducers';

const checkDevTools = typeof window === 'object'
      && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const storeConfig = createStore(
  reducers,
  compose(
    checkDevTools,
  ),
);

export default storeConfig;
