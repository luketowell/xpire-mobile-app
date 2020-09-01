import {
    GET_CATEGORY_STORE_ITEMS_PENDING,
    GET_CATEGORY_STORE_ITEMS_FAILED,
    GET_CATEGORY_STORE_ITEMS_SUCCESS,
    RESET_STORE_ITEMS_LIST,
    GET_STORE_ITEM_DETAILS_PENDING,
    RESET_STORE_ITEM_DETAILS,
    GET_STORE_ITEM_DETAILS_FAILED,
    GET_STORE_ITEM_DETAILS_SUCCESS,
    ADD_NEW_ACTION_PENDING,
    ADD_NEW_ACTION_FAILED,
    ADD_NEW_ITEM_SUCCESS,
} from '../constants';
import request from '../../utils/Request';
import Action from '../../models/Action';
import StoreItemAction from '../../models/StoreItemAction';
import { getStores } from './configActions';

export const getStoreItemsByCategory = (categoryId) => {
    return (dispatch, getState) => {
        const { auth } = getState();
        let { storeNumber } = auth.user;
        dispatch({
            type: GET_CATEGORY_STORE_ITEMS_PENDING,
        });
        request(`/storeitemsummary/${storeNumber}/${categoryId}`, 'GET')
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

export const getStoreItemDetails = (storeItemId) => {
    return (dispatch) => {
        dispatch({
            type: GET_STORE_ITEM_DETAILS_PENDING,
        });
        request(`/storeitem/id/${storeItemId}`, 'GET')
            .then((response) => {
                dispatch({
                    type: GET_STORE_ITEM_DETAILS_SUCCESS,
                    payload: response,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_STORE_ITEM_DETAILS_FAILED,
                    payload: error,
                });
            });
    };
};

export const resetStoreItemsList = () => {
    return {
        type: RESET_STORE_ITEMS_LIST,
    };
};

export const resetStoreItemDetails = (storeItemId) => {
    return (dispatch) => {
        dispatch({
            type: RESET_STORE_ITEM_DETAILS,
        });
    };
};

export const addStoreItemAction = (actionDetails) => {
    return (dispatch, getState) => {
        const { auth, storeItem } = getState();
        console.log(storeItem);
        const newAction = new Action(
            storeItem.storeItemDetails.id,
            auth.user.username,
            actionDetails
        );
        console.log(newAction);
        const data = new StoreItemAction(
            storeItem.storeItemDetails.id,
            newAction
        );
        dispatch({
            type: ADD_NEW_ACTION_PENDING,
        });
        // request('storeitem/item/action', 'post', data)
        //     .then((response) => {
        //         dispatch({ type: ADD_NEW_ITEM_PENDING });
        //     })
        //     .catch((error) => {
        //         dispatch({ type: ADD_NEW_ACTION_FAILED, payload: error });
        //     });
    };
};
