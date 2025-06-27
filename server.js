import express, { urlencoded, json } from 'express';
import cookieParser from 'cookie-parser'
import connectDB from './MongoDB/DB.js';
import {userRoute,productRoute, authRoute , cartRoute} from './Route/barrel.js';
import dotenv from "dotenv"
dotenv.config();
connectDB()

const app = express();


app.use(urlencoded({extended: true}))
app.use(json())
app.use(cookieParser())




app.use('/api', userRoute)
app.use('/api', authRoute)
app.use('/api', productRoute)
app.use('/api', cartRoute)


const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});