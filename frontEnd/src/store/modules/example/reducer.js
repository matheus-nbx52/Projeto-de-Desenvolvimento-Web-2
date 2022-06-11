import * as types from '../types';

const initialState = {
  bottaoClicado: false,
};
// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      // eslint-disable-next-line no-console
      // eslint-disable-next-line no-case-declarations
      const newState = { ...state };
      console.log('foi um sucesso');
      newState.bottaoClicado = !newState.bottaoClicado;
      return newState;
    case types.BOTAO_CLICADO_REQUEST:
      // eslint-disable-next-line no-case-declarations
      console.log('Estou fazendo a requisição');
      return state;
    case types.BOTAO_CLICADO_FAIL:
      // eslint-disable-next-line no-case-declarations
      console.log('Deu Algum erro');
      return state;
    default:
      return state;
  }
}
