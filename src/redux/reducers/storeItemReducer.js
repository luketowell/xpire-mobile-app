import {
    GET_CATEGORY_STORE_ITEMS_PENDING,
    GET_CATEGORY_STORE_ITEMS_FAILED,
} from '../constants';

const initialState = {
    storeItemsListStatus: '',
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
        default:
            return {
                ...state,
            };
    }
};

export default StoreItemReducer;
