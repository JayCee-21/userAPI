import Router from 'express';
import {loggingIn, loggingOut} from '../Controllers/barrel.js';


const authRoute = Router();


authRoute
        .post('/user/login', loggingIn)
        .post('/user/logout', loggingOut)
  
        
   export default authRoute;    