import { combineReducers } from 'redux';
import home from './homeReducer';
// import entities from './entities'

const rootReducer = combineReducers({
  home,
});

export default rootReducer;

