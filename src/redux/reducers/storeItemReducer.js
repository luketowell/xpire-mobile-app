import {
    GET_CATEGORY_STORE_ITEMS_PENDING,
    GET_CATEGORY_STORE_ITEMS_FAILED,
    GET_CATEGORY_STORE_ITEMS_SUCCESS,
} from '../constants';

const initialState = {
    storeItemsListStatus: 'pending',
    storeItemList: [],
    error: '',
};

const StoreItemReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case GET_CATEGORY_STORE_ITEMS_PENDING:
            return {
                ...state,
                storeItemsListStatus: 'pending',
            };
        case GET_CATEGORY_STORE_ITEMS_FAILED:
            return {
                ...state,
                storeItemsListStatus: 'failed',
                error: action.payload,
            };
        case GET_CATEGORY_STORE_ITEMS_SUCCESS:
            return {
                ...state,
                storeItemsListStatus: 'completed',
                storeItemList: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default StoreItemReducer;
