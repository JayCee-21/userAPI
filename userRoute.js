import Router from 'express';
import { createUser, readUsers,getOneUser, editUser, editProfile, deleteUser } from '../Controllers/barrel.js';
import authMiddleware from '../Middleware/authMiddleware.js'
const userRoute = Router();


userRoute 
      .post('/user/register', createUser)
      .get('/users',authMiddleware, readUsers)
      .get('/users', getOneUser)
      .put('/user/update/:id',authMiddleware, editUser)
      .put('/profile/update/:id',authMiddleware, editProfile)
      .delete('/user/delete/:id',authMiddleware, deleteUser)


      export default userRoute;