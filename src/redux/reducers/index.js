// reducers/index.js
import { combineReducers } from 'redux';
import idReducer from './idReducer';

const rootReducer = combineReducers({
  id: idReducer
});

export default rootReducer;
