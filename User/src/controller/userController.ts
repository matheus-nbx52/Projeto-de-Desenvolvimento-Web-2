/* eslint-disable arrow-body-style */
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import UserModel from '../model/UserModel';

type User = {
  name: string,
  sobrenome: string,
  userName: string,
  email: string,
  image: string,
  password: string
}

class UserController {
  // eslint-disable-next-line consistent-return
  async newUser(req, res) {
    let user: User = req.body;
    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).Json({
        error: true,
        message: "dont't have user",
      });
    }

    // Só vai mandar isso pro banco
    user = {
      name: user.name,
      sobrenome: user.sobrenome,
      email: user.email,
      userName: user.userName,
      image: req.file ? req.file.filename : '',
      password: await bcrypt.hash(user.password, 10),
    };

    UserModel.create(user).then(() => {
      return res.status(StatusCodes.CREATED).json({
        error: false,
        message: 'Sucess',
      });
    }).catch((e) => {
      // Erro 11000 se refere a dados duplicados
      if (e.code === 11000) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          error: true,
          message: 'user or email already exists',
        });
      }
      return res.status(StatusCodes.BAD_GATEWAY).send({
        error: true,
        message: 'DataBaseError',
      });
    });
  }

  async AllUsers(req, res) {
    const users = await UserModel.find();
    res.status(StatusCodes.OK).json({ users });
  }

  async updateUser(req, res) {
    if (!req.params.userId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: 'Send one id',
      });
    }

    try {
      let user = req.body;
      if (!user) {
        return res.status(StatusCodes.BAD_GATEWAY).send({
          error: true,
          message: 'null fields',
        });
      }

      user = {
        name: user.name,
        sobrenome: user.sobrenome,
        email: user.email,
        userName: user.userName,
        image: req.file ? req.file.filename : undefined,
        password: await bcrypt.hash(user.password, 10), // hash da password
      };

      await UserModel.findByIdAndUpdate(req.params.userId, user);
      return res.status(StatusCodes.CREATED).send({
        error: false,
        message: 'sucess',
      });
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.BAD_GATEWAY).send({

        error: true,
        message: 'Database Error',
      });
    }
  }

  async removeUser(req, res) {
    if (!req.params.userId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: 'Send one id',
      });
    }
    try {
      await UserModel.findByIdAndDelete(req.params.userId);
      return res.status(StatusCodes.ACCEPTED).json({
        error: false,
        message: 'Sucess',
      });
    } catch (error) {
      return res.status(StatusCodes.ACCEPTED).send({
        error: true,
        message: 'Database Error',
      });
    }
  }
}

export default new UserController();
