// Aqui fica todos os reducers existentes na nossa aplicão
import { combineReducers } from 'redux';
import auth from './modules/auth/reducer';

export default combineReducers({
  auth,
});
