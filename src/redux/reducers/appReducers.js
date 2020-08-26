import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ConfigReducer from './configReducer';

const AppReducers = combineReducers({
    auth: AuthReducer,
    config: ConfigReducer,
});

export default AppReducers;
