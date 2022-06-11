import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedsReducers = persistReducer(
    {
      key: 'NEW_AUTH',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );
  return persistedsReducers;
};
