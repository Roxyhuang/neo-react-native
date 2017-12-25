import { fork } from 'redux-saga/effects';

import home from './home';
// import login from './login';

// Consider using takeEvery
export default function* root() {
  yield fork(home);
  // yield fork(login);
}