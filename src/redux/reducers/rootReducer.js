import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import productReducer from './productReducer';

export default combineReducers({
  home: homeReducer,
  product: productReducer,
});
