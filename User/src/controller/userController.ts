/* eslint-disable arrow-body-style */
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import UserModel from '../model/UserModel';

type User = {
  name: string,
  sobrenome: string,
  userName: string,
  email: string,
  password: string
}

class UserController {
  // eslint-disable-next-line consistent-return
  async newUser(req, res) {
    let user: User = req.body;
    if (!user) return res.status(StatusCodes.BAD_REQUEST).send('there is a missing information');

    // Só vai mandar isso pro banco
    user = {
      name: user.name,
      sobrenome: user.sobrenome,
      email: user.email,
      userName: user.userName,
      password: await bcrypt.hash(user.password, 10),
    };

    UserModel.create(user).then(() => {
      return res.status(StatusCodes.OK).send('Sucess');
    }).catch(() => {
      return res.status(StatusCodes.BAD_GATEWAY).send('Database Error');
    });
  }

  async AllUsers(req, res) {
    const users = await UserModel.find();
    res.status(200).json(users);
  }
}

export default new UserController();
