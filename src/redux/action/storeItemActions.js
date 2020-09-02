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
    FIND_STORE_ITEM_BY_UPC_PENDING,
    FIND_STORE_ITEM_BY_UPC_SUCCESS,
    FIND_STORE_ITEM_BY_UPC_FAILED,
    FIND_STORE_ITEM_BY_UPC_NOT_FOUND,
    RESET_FIND_STORE_ITEM,
    ADD_NEW_ITEM_FAILED,
} from '../constants';
import request from '../../utils/Request';
import Action from '../../models/Action';
import StoreItemAction from '../../models/StoreItemAction';
import { getStores } from './configActions';
import StoreItem from '../../models/StoreItem';

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

export const getStoreItemByUPC = (itemUpc) => {
    return (dispatch, getState) => {
        const { storeNumber } = getState().auth.user;
        console.log(storeNumber);
        console.log(itemUpc);

        dispatch({
            type: FIND_STORE_ITEM_BY_UPC_PENDING,
        });
        request(`/storeitemsummary/findItem/${storeNumber}/${itemUpc}`, 'GET')
            .then((response) => {
                if (response.length === 0) {
                    console.log(response.length);
                    dispatch({
                        type: FIND_STORE_ITEM_BY_UPC_NOT_FOUND,
                    });
                } else {
                    dispatch({
                        type: FIND_STORE_ITEM_BY_UPC_SUCCESS,
                        payload: response,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: FIND_STORE_ITEM_BY_UPC_FAILED,
                    payload: error,
                });
            });
    };
};

export const resetStoreItemByUPC = () => {
    return (dispatch) => {
        dispatch({
            type: RESET_FIND_STORE_ITEM,
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
        console.log(data);
        dispatch({
            type: ADD_NEW_ACTION_PENDING,
        });
        request('storeitem/item/action', 'post', data)
            .then((response) => {
                console.log(response);
                //stop spinner
                //create new store item
                //retrieve the storeItemDetails for this item.
            })
            .catch((error) => {
                dispatch({ type: ADD_NEW_ACTION_FAILED, payload: error });
            });
    };
};

export const addNewStoreItem = (barcode, expiry_date) => {
    return (dispatch, getState) => {
        const { storeNumber } = getState().auth.user;

        const newStoreItem = new StoreItem(
            barcode,
            expiry_date,
            storeNumber,
            null
        );

        const data = {};
        data.item_upc = parseInt(barcode);
        data.storeId = storeNumber;
        data.expiry_date = '2020-09-04';
        data.created_date = '2020-09-02';
        data.updated_date = null;
        console.log(data);
        request(`/storeitem/new`, 'post', data)
            .then((response) => {
                console.log(response.id);
                dispatch(getStoreItemDetails(response.id));
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: ADD_NEW_ITEM_FAILED,
                    payload: error,
                });
            });
    };
};
