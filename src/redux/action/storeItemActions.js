import {
    GET_CATEGORY_STORE_ITEMS_PENDING,
    GET_CATEGORY_STORE_ITEMS_FAILED,
    GET_CATEGORY_STORE_ITEMS_SUCCESS,
} from '../constants';

export const getStoreItemsByCategory = (categoryId) => {
    return (dispatch, getState) => {
        dispatch({
            type: GET_CATEGORY_STORE_ITEMS_PENDING,
        });

        const { auth } = getState();

        console.log(auth);

        dispatch({
            type: GET_CATEGORY_STORE_ITEMS_FAILED,
        });
    };
};
