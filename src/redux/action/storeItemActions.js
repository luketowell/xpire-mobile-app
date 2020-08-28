import {
    GET_CATEGORY_STORE_ITEMS_PENDING,
    GET_CATEGORY_STORE_ITEMS_FAILED,
    GET_CATEGORY_STORE_ITEMS_SUCCESS,
} from '../constants';
import request from '../../utils/Request';

export const getStoreItemsByCategory = (categoryId) => {
    return (dispatch, getState) => {
        const { auth } = getState();
        let { storeNumber } = auth.user;
        dispatch({
            type: GET_CATEGORY_STORE_ITEMS_PENDING,
        });
        request(`/storeItemsummary/${storeNumber}/${categoryId}`, 'GET')
            .then((response) => {
                dispatch({
                    type: GET_CATEGORY_STORE_ITEMS_SUCCESS,
                    payload: response,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_CATEGORY_STORE_ITEMS_FAILED,
                    payload: error.message,
                });
            });
    };
};
