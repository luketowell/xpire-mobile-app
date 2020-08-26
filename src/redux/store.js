import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducers from './reducers/appReducers';

const Store = createStore(AppReducers, applyMiddleware(thunk));

export default Store;
