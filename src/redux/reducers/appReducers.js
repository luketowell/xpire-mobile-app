import { combineReducers } from 'redux';
import AuthReducer from './authReducer';

const AppReducers = combineReducers({
    auth: AuthReducer,
});

export default AppReducers;
