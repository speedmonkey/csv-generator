import { combineReducers } from 'redux';
import productReducer from './productReducer';
import sheetReducer from './sheetReducer';

export default combineReducers({
  product: productReducer,
  sheet: sheetReducer,
});
