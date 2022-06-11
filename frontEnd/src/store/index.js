/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistedreduces from './reduxPersist';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedreduces(rootReducer), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
