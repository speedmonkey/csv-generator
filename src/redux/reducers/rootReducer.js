import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import productReducer from './productReducer';
import sheetReducer from './sheetReducer';
import qualityReducer from './qualityReducer';

export default combineReducers({
  header: headerReducer,
  product: productReducer,
  sheet: sheetReducer,
  quality: qualityReducer,
});
