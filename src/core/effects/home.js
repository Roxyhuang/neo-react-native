import { take, put, call, fork, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { INCREMENT, INCREMENT_ASYNC } from '../../core/actions/actionTypes';
// import { Actions } from 'react-native-router-flux';
// import { LOAD } from 'redux-storage';
// import { getUser } from '../reducers/selectors';

export const delay = ms => new Promise((resolve, reject) => {
  if (ms === 1000) {
    resolve('成功');
  } else {
    reject(new Error('not'));
  }
});

function* incrementAsync() {
  // while(true) {
  try {
    yield call(delay, 1000);
    yield put({ type: INCREMENT });
  } catch (e){
    console.log(e);
  }
  // }
}

// Bootstrap Functions App
export default function* root() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsync)
}