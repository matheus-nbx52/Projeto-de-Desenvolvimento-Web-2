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
    }).catch((e) => {
      // Erro 11000 se refere a dados duplicados
      if (e.code === 11000) return res.status(StatusCodes.BAD_GATEWAY).send('User Já existe');
      return res.status(StatusCodes.BAD_GATEWAY).send('Database Error');
    });
  }

  async AllUsers(req, res) {
    const users = await UserModel.find();
    res.status(200).json(users);
  }

  async updateUser(req, res) {
    console.log(req.params.userId);
    if (!req.params.userId) return res.status(StatusCodes.BAD_REQUEST).send('Insira o id do usuario');
    try {
      let user = req.body;
      if (!user) {
        return res.status(StatusCodes.ACCEPTED).send('campos vazios ou inexistentes');
      }
      user = {
        name: user.name,
        sobrenome: user.sobrenome,
        email: user.email,
        userName: user.userName,
        password: await bcrypt.hash(user.password, 10),
      };
      await UserModel.findByIdAndUpdate(req.params.userId, user);
      return res.status(StatusCodes.ACCEPTED).send('Atualizado com sucesso');
    } catch (error) {
      return res.status(StatusCodes.ACCEPTED).send('Erro ao Ao atualizar usuario');
    }
  }

  async removeUser(req, res) {
    console.log(req.params.userId);
    if (!req.params.userId) return res.status(StatusCodes.BAD_REQUEST).send('Insira o id do usuario');
    try {
      await UserModel.findByIdAndDelete(req.params.userId);
      return res.status(StatusCodes.ACCEPTED).send('Removido com sucesso');
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.ACCEPTED).send('Erro ao remover usuário');
    }
  }
}

export default new UserController();
