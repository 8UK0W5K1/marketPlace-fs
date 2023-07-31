//@ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(): {
  configureStore: any;
} {
  return createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
}

// export default function configureStore() {
//   return createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
// }
