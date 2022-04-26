import { Request, Response, Router } from 'express';
import userController from '../controller/userController';

// const bcrypt = require('bcrypt');

const userRoutes = Router();

// Listagem de usuarios _ (Nao deve ser mandado com o projeto ja no ar)
userRoutes.get('/user', (req:Request, res:Response) => {
  res.status(200).json({ status: 'tudoOk' });
});
// Vai adicionar novos usuarios
userRoutes.post('/new', userController.newUser);

export = userRoutes;

// Oque deve ser feito
// Configurar o mongo db
