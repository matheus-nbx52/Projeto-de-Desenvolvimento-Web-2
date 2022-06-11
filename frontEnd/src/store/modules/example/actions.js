import * as types from '../types';
// o action e responsavel por disparar as ações/eventos
export function clicaBottãoRequest() {
  return ({
    type: types.BOTAO_CLICADO_REQUEST,

  });
}
export function clicaBottãoSuccess() {
  return ({
    type: types.BOTAO_CLICADO_SUCCESS,

  });
}
export function clicaBottãoFail() {
  return ({
    type: types.BOTAO_CLICADO_FAIL,

  });
}
