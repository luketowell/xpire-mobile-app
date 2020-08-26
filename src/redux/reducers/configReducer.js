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
    categories: [],
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
        default:
            return { ...state };
    }
};

export default ConfigReducer;
