import {
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    GET_STATUSES_PENDING,
    GET_STATUSES_SUCCESS,
    GET_STATUSES_FAILURE,
    GET_STORES_PENDING,
    GET_STORES_SUCCESS,
    GET_STORES_FAILURE,
} from '../constants';
import request from '../../utils/Request';

export const getCategories = () => {
    return (dispatch) => {
        dispatch({
            type: GET_CATEGORIES_PENDING,
        });

        request('/categories/all', 'GET')
            .then((response) => {
                type: GET_CATEGORIES_SUCCESS;
                payload: response;
            })
            .catch((error) => {
                dispatch({
                    type: GET_CATEGORIES_FAILURE,
                    payload: error,
                });
            });
    };
};

export const getStores = () => {};

export const getStatuses = () => {};
