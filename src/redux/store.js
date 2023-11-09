// store.js
import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // You'll create this in the next step

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
