import * as types from '../types';
// o action e responsavel por disparar as ações/eventos
export function loginRequest(payload) {
  return ({
    type: types.LOGIN_REQUEST,
    payload,

  });
}
export function loginSuccess(payload) {
  return ({
    type: types.LOGIN_SUCCESS,
    payload,

  });
}

export function loginFail(payload) {
  return ({
    type: types.LOGIN_FAIL,
    payload,

  });
}
