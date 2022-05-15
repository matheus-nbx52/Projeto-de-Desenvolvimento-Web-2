import { Router } from 'express';
import loginController from '../controller/loginController';

const userRoutes = Router();

userRoutes.post('/login', loginController.login);

export default userRoutes;

// Para logar deve ser colocado um email e uma senha
