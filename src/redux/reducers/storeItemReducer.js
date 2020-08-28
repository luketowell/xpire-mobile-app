const { GET_CATEGORY_STORE_ITEMS_PENDING } = require('../constants');

const initialState = {
    storeItemsListStatus: '',
};

const StoreItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_STORE_ITEMS_PENDING:
            return {
                ...state,
                storeItemsListStatus: 'pending',
            };
        default:
            return {
                ...state,
            };
    }
};

export default StoreItemReducer;
