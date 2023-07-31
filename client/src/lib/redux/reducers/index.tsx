import { combineReducers } from 'redux';
import user from './user';
import cart from './cart';
import products from './products';

const reducers = combineReducers({
  user,
  cart,
  products,
});

export default reducers;
