import { AUTH_USER } from '../constants';

export const authUser = () => {
    return {
        payload: AUTH_USER,
    };
};
