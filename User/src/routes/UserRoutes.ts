import { Router } from 'express';
import userController from '../controller/userController';
import uploadUser from '../middlewares/upload';

const userRoutes = Router();

// Listagem de usuarios _ (Nao deve ser mandado com o projeto ja no ar)
userRoutes.get('/user', userController.AllUsers);
// Vai adicionar novos usuarios

userRoutes.post('/new', uploadUser.single('userImg'), userController.newUser);

userRoutes.put('/update/:userId', uploadUser.single('userImg'), userController.updateUser);

userRoutes.delete('/remove/:userId', userController.removeUser);

export = userRoutes;
