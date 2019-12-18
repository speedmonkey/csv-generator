import { combineReducers } from 'redux';
import productReducer from './productReducer';
import sheetReducer from './sheetReducer';
import qualityReducer from './qualityReducer';

export default combineReducers({
  product: productReducer,
  sheet: sheetReducer,
  quality: qualityReducer,
});
