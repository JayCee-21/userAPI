import Router from 'express';
import { createProduct} from '../Controllers/barrel.js';
const productRoute = Router();


productRoute 
      .post('/user/register', createProduct)


      export default productRoute;