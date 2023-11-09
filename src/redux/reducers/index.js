// reducers/index.js
import { combineReducers } from 'redux';
import idReducer from './idReducer';
import linkTokenReducer from './linkToken';

const rootReducer = combineReducers({
  id: idReducer,
  linkToken: linkTokenReducer,
});

export default rootReducer;
