import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const productSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Product = model('product', productSchema)

export default Product
