import { AUTH_USER } from '../constants';
import User from '../../Assets/mocks/user';

export const authUser = () => {
    let user = User();
    return {
        type: AUTH_USER,
        payload: user,
    };
};
