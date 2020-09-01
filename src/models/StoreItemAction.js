class StoreItemAction {
    constructor(id, action) {
        (this.id = id),
            (this.updatedDate = new Date()),
            (this.action = [action]);
    }
}

export default StoreItemAction;
