// store.js
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // You'll create this in the next step


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

// const store = legacy_createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

export default store;
