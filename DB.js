import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log('Error connecting to mongoDB')
    }
}

export default connectDB