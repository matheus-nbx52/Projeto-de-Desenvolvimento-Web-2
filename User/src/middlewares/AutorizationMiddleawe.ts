import jsonwebtoken from 'jsonwebtoken';
import UserModel from '../model/UserModel';

export default async (req, res, next) => {
  const { autorization } = req.headers;
  console.log(req.headers);
  if (!autorization) {
    return res.status(401).json('login Required');
  }
  const [bearer, token] = autorization.split(' ');

  try {
    const dados = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    const { _id } = dados;
    const user = await UserModel.findOne({
      where: {
        _id,
      },
    });
    if (!user) {
      return res.status(401).json('invalid User');
    }
    return next();
  } catch (e) {
    return res.status(401).json('invalid token');
  }
};
