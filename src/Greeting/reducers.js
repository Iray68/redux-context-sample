import { CHANGE_WORD } from './actions';
import { useReducer } from 'react';

const initialState = {
  name: 'World'
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WORD:
      return Object.assign({}, state, {
        name: action.text
      });
    default:
      return state
  }
};

export const useGreetingReducer = () => useReducer(greetingReducer, initialState);