import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedsReducers = persistReducer(
    {
      key: 'NOME_DA_APLICAÇÃO',
      storage,
      whitelist: ['reducer'],
    },
    reducers,
  );
  return persistedsReducers;
};
