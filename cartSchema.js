import { Schema as __Schema } from 'mongoose'
const Schema = __Schema

const cartItemSchema = new Schema({
    productId: {
        type: __Schema.Types.ObjectId,
        ref: "product"
    },
quantity: {
    type: Number,
    required: true,
    default: 1
  }
})

const cartSchema = new Schema({
    userId: {
        type: __Schema.Types.ObjectId,
        ref: "user"
    },
    products: [cartItemSchema],
}, { timestamps: true})


const Cart = model('cart', cartSchema)

export default Cart