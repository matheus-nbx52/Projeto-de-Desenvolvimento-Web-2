import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model('user', UserSchema);
// Nome Sobrenome email username , password

export default UserModel;
