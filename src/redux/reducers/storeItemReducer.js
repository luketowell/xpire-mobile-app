import {
    GET_CATEGORY_STORE_ITEMS_PENDING,
    GET_CATEGORY_STORE_ITEMS_FAILED,
    GET_CATEGORY_STORE_ITEMS_SUCCESS,
    RESET_STORE_ITEMS_LIST,
    GET_STORE_ITEM_DETAILS_PENDING,
    GET_STORE_ITEM_DETAILS_FAILED,
    GET_STORE_ITEM_DETAILS_SUCCESS,
    RESET_STORE_ITEM_DETAILS,
    ADD_NEW_ACTION_PENDING,
    FIND_STORE_ITEM_BY_UPC_PENDING,
    FIND_STORE_ITEM_BY_UPC_NOT_FOUND,
    FIND_STORE_ITEM_BY_UPC_FAILED,
    RESET_FIND_STORE_ITEM,
    FIND_STORE_ITEM_BY_UPC_SUCCESS,
} from '../constants';

const initialState = {
    storeItemsListStatus: 'pending',
    storeItemDetailStatus: 'pending',
    storeItemAction: '',
    storeItemList: [],
    storeItemSearchStatus: '',
    storeItemDetails: {},
    error: '',
};

const StoreItemReducer = (state = initialState, action) => {
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
        case RESET_STORE_ITEMS_LIST:
            return {
                storeItemsListStatus: 'pending',
                storeItemList: [],
                error: '',
            };
        case GET_STORE_ITEM_DETAILS_PENDING:
            return {
                ...state,
                storeItemDetailStatus: 'pending',
            };
        case GET_STORE_ITEM_DETAILS_FAILED:
            return {
                ...state,
                storeItemDetailStatus: 'failed',
                error: action.payload,
            };
        case GET_STORE_ITEM_DETAILS_SUCCESS:
            return {
                ...state,
                storeItemDetailStatus: 'complete',
                storeItemDetails: action.payload,
            };
        case RESET_STORE_ITEM_DETAILS:
            return {
                ...state,
                storeItemDetailStatus: 'pending',
                storeItemDetails: {},
                error: '',
            };
        case ADD_NEW_ACTION_PENDING:
            return {
                ...state,
                storeItemActionStatus: 'pending',
            };
        case FIND_STORE_ITEM_BY_UPC_PENDING:
            return {
                ...state,
                storeItemSearchStatus: 'pending',
            };
        case FIND_STORE_ITEM_BY_UPC_FAILED:
            return {
                ...state,
                storeItemSearchStatus: 'failed',
            };
        case FIND_STORE_ITEM_BY_UPC_NOT_FOUND:
            return {
                ...state,
                storeItemSearchStatus: 'not found',
            };
        case FIND_STORE_ITEM_BY_UPC_SUCCESS:
            return {
                ...state,
                storeItemSearchStatus: 'complete',
                storeItemList: action.payload,
            };
        case RESET_FIND_STORE_ITEM:
            return {
                ...state,
                storeItemList: [],
                storeItemSearchStatus: '',
            };
        default:
            return {
                ...state,
            };
    }
};

export default StoreItemReducer;
