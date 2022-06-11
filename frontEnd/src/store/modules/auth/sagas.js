import {
  call, put, all, takeLatest,
} from 'redux-saga/effects'; // o call chama uma função
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// teste

// eslint-disable-next-line no-unused-vars

// funçao* e uma função geradora
// eslint-disable-next-line no-unused-vars
function* loginRequest({payload}) {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()
    const response = yield call(axios.post,'http://localhost:3030/login',payload)
    yield put(actions.loginSucces({...response.data}))
    toast.success('Voce fez login');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`
    navigate('/home')
    console.log('epaaa')
    
    
  } catch (e) {
    toast.error('Usuario ou senha invalidos')
    yield put(actions.loginFail)
    
  }
  
  
}

const allItens = all(
  [takeLatest(types.LOGIN_REQUEST, loginRequest)],
);

export default allItens;
