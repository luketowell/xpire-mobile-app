import { AUTH_USER } from '../constants';

const initialState = {
    loggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                loggedIn: true,
            };
        default:
            return {
                ...state,
            };
    }
};

export default AuthReducer;
