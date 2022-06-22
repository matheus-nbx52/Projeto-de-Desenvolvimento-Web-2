import {
  call, put, all, takeLatest,
} from 'redux-saga/effects'; // o call chama uma função
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

import axiosCommentConfig from '../../../services/axiosCommentConfig';

// teste

// eslint-disable-next-line no-unused-vars

// funçao* e uma função geradora
// eslint-disable-next-line no-unused-vars
function* loginRequest({payload}) {
  try {
    const response =  yield call(axiosCommentConfig.post,'/login',payload)
    yield put(actions.loginSuccess({...response.data}))
    axiosCommentConfig.defaults.headers.Authorization = `Bearer ${response.data.token}`
    console.log('Saga',{response})

    
    
  } catch (e) {
    console.log(e)
    toast.error('Usuario ou senha invalidos')
    yield put(actions.loginFail()) 
  } 
}
function persistRehydrate({payload}){
  const token = payload.auth.token
  if(!token){
    return
  }
  axiosCommentConfig.defaults.headers.Authorization = `Bearer ${token}`

}

const allItens = all([
    takeLatest(types.LOGIN_REQUEST, loginRequest)
  , takeLatest(types.PERSIST_REHYDRATE,persistRehydrate)
]
);

export default allItens;
