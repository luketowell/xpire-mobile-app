class StoreItem {
    constructor(barcode, expiry_date, storeId, updated_date) {
        (this.item_upc = parseInt(barcode)),
            (this.store_id = storeId),
            (this.expiry_date = expiry_date.toUTCString()),
            (this.created_date = new Date().toUTCString()),
            (this.updated_date = updated_date);
    }
}

export default StoreItem;
