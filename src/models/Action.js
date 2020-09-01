class Action {
    constructor(storeItemId, username, actionDetails) {
        (this.store_item_id = storeItemId),
            (this.user_id = username),
            (this.status_id = actionDetails.status),
            (this.expired_count = actionDetails.expired_count),
            (this.createdDate = new Date());
    }
}

export default Action;
