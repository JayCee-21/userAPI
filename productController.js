import Product from '../Models/productSchema.js';


export const createProduct = async (req, res) => {
    const {name, description, price, color, size} = req.body;
    const user = req.user

    console.log(req.user)
    if(!name || !description || !price || !color || !size){
        return res.status(400).json({message: 'Please provide all the required fields'})
    }
    try {
        const newproduct = new Product({...req.body, userId: user._id})
        await newproduct.save();
        res.status(201).json({message: 'New Product created successfully!'});
    } catch (error) {
        res.status(500).json({errormessage: error.message});
    }
}
