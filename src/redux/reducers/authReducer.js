import { AUTH_USER } from '../constants';

const initialState = {
    loggedIn: false,
    user: {},
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default AuthReducer;
