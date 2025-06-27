import { findOne } from '../Model/userSchema.js'
import Cart, { findOne as _findOne } from '../Model/cartSchema'

export const createCartItem = async (req, res) => {
    const { userId } = req.body
    try {
        const user = await findOne({ userId })
        if(!user) {
            return res.status(400).json({message: 'User not found'})
        }
        const cart = await _findOne({userId})
        if(cart) {
            return res.status(400).json({message: 'Cart already exists for user'})
        }
        const newCart = new Cart({userId, items:[], total: 0})
        await newCart.save()
        res.status(200).json({message: 'Cart created successfully'})
    } catch (error) {
        res.status(500).json(error)
    }
}