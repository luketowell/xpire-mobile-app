class StoreItemAction {
    constructor(id, action) {
        (this.id = id),
            (this.updated_date = new Date()),
            (this.actions = [action]);
    }
}

export default StoreItemAction;
