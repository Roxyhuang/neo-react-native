import * as types from '../actions/actionTypes';
import InitialState from '../state/homeInitialState';

const initialState = new InitialState();

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state.set('home', state.home + 1);
    case types.DECREMENT:
      return state.set('home', state.home - 1);
    default:
      return state;
  }
}