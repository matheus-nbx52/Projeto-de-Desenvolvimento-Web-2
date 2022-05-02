import { Router } from 'express';
import userController from '../controller/userController';

const userRoutes = Router();

// Listagem de usuarios _ (Nao deve ser mandado com o projeto ja no ar)
userRoutes.get('/user', userController.AllUsers);
// Vai adicionar novos usuarios
userRoutes.post('/new', userController.newUser);

userRoutes.post('/new', userController.newUser);

userRoutes.post('/new', userController.newUser);

export = userRoutes;

// Oque deve ser feito
// Configurar o mongo db
