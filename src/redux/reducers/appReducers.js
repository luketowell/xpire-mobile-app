import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ConfigReducer from './configReducer';
import StoreItemReducer from './storeItemReducer';

const AppReducers = combineReducers({
    auth: AuthReducer,
    config: ConfigReducer,
    storeItem: StoreItemReducer,
});

export default AppReducers;
