import { Router } from 'express';
import userController from '../controller/userController';
import uploadUser from '../middlewares/upload';

const userRoutes = Router();

// Listagem de usuarios _ (Nao deve ser mandado com o projeto ja no ar)
userRoutes.get('/user', userController.AllUsers);
// Vai adicionar novos usuarios
userRoutes.get('/user/:userId', userController.getUserById);

userRoutes.post('/new', uploadUser.single('userImg'), userController.newUser);

userRoutes.post('/update/:userId', uploadUser.single('userImg'), userController.updateUser); // metodo deve ser put

userRoutes.delete('/remove/:userId', userController.removeUser);

export = userRoutes;
