module.exports = (model, Schema) => {

    const Order = new Schema({
        accountid: String,
        doc_number: String,
        po_number: String,
        id: Number,
        actual_trans_ts: String,
        ea_abbrev: String,
        qty: Number,
        item_code: String,
        description: String,
        containerid: String,
        Day: Number,
        actual_weight: Number,
        ea_width: Number,
        ea_height: Number,
        ea_depth: Number,
        var0: String,
        cntrl: String,
        service_class: Number,

    }, {timestamps: {createdAt: 'birthday', udpatedAt:'orderchange'}})

    return model('Order', Order)
}