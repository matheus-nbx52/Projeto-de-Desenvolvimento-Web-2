import { all } from 'redux-saga/effects';

import example from './modules/example/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
