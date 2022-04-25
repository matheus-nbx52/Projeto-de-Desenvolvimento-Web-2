import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const userRoutes = Router();
type User ={
    email:string,
    name:string,
    password:string
}
// Listagem de usuarios _ (Nao deve ser mandado com o projeto ja no ar)
userRoutes.get('/user', (req:Request, res:Response) => {
  res.status(200).json({ status: 'tudoOk' });
});

// Vai adicionar novos usuarios
userRoutes.post('/user', (req:Request, res:Response) => {
  let user:User = req.body;

  if (Object.values(user).length === 0) return res.sendStatus(StatusCodes.BAD_GATEWAY);

  user = {
    email: user.email,
    name: user.name,
    password: user.password,
  };

  return res.status(StatusCodes.OK).send(user);
});

export = userRoutes;

// usuario
// email , senha,username,
