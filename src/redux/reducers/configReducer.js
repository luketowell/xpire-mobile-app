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

const initialState = {
    categoriesStatus: 'pending',
    storesStatus: 'pending',
    statusesStatus: 'pending',
    categories: [],
    stores: [],
    statuses: [],
    error: '',
};

const ConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_PENDING:
            return {
                ...state,
                categoriesStatus: 'pending',
            };
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                categoriesStatus: 'failed',
                error: action.payload.message,
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesStatus: 'complete',
                categories: action.payload,
            };
        case GET_STATUSES_PENDING:
            return {
                ...state,
                statusesStatus: 'pending',
            };
        case GET_STATUSES_SUCCESS:
            return {
                ...state,
                statusesStatus: 'complete',
                statuses: action.payload,
            };
        case GET_STATUSES_FAILURE:
            return {
                ...state,
                statusesStatus: 'failed',
                error: action.payload.message,
            };
        case GET_STORES_PENDING:
            return {
                ...state,
                statusesStatus: 'pending',
                stores: action.payload,
            };
        case GET_STORES_SUCCESS:
            return {
                ...state,
                statusesStatus: 'complete',
                stores: action.payload,
            };
        case GET_STORES_FAILURE:
            return {
                ...state,
                statusesStatus: 'failed',
                error: action.payload.message,
            };
        default:
            return { ...state };
    }
};

export default ConfigReducer;
