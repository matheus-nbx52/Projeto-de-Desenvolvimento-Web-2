import { StatusCodes } from 'http-status-codes';
import UserModel from '../model/userModel';

type User = {
  name: string,
  sobrenome:string,
  userName:string,
  email: string,
  password: string
}

class UserController {
  // eslint-disable-next-line class-methods-use-this
  newUser(req, res) {
    let user: User = req.body;
    if (!user) return res.status(StatusCodes.BAD_REQUEST).send('there is a missing information');

    user = {
      name: user.name,
      sobrenome: user.sobrenome,
      email: user.email,
      userName: user.userName,
      password: user.password,
    };
    UserModel.create(user);
    return res.status(StatusCodes.OK).send('Sucess');
  }
}

export default new UserController();
