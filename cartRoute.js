import Router from 'express';
import { createCartItem} from '../Controllers/cartAPI/createCart.js'
import authMiddleware from '../Middleware/authMiddleware.js';
const cartRoute = Router();


cartRoute 
      .post('/user/register/:id',authMiddleware, createCartItem)


      export default cartRoute;