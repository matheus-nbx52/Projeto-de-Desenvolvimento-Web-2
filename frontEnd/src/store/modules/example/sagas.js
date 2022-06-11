import {
  call, put, all, takeLatest,
} from 'redux-saga/effects'; // o call chama uma função
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
// teste

// eslint-disable-next-line no-unused-vars
const requisição = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 500);
});

// funçao* e uma função geradora
// eslint-disable-next-line no-unused-vars
function* exampleRequest() {
  try {
    yield call(requisição); // se afunçao tivesse parametros eles deven ser passados com , sem os ()
    yield put(actions.clicaBottãoSuccess());
  } catch {
    toast.error('Não foi possivel completar a ação');
    yield put(actions.clicaBottãoFail());
  }
}

const allItens = all(
  [takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)],
);

export default allItens;
