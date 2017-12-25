import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT,
  };
}

export function decrement() {
  return {
    type: types.DECREMENT,
  };
}

export function incrementAsync() {
  return {
    type: types.INCREMENT_ASYNC,
  };
}

// function requestLogin(username, password) {
//   return dispatch => {
//     dispatch(loginStarted());
//     return fetch('/login', {username, password})
//         .then(response => response.json())
//         .then(data => {
//           dispatch(receiveUserData(data));
//           dispatch(loginEnded());
//         });
//   }
// }
