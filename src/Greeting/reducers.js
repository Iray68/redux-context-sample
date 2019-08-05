import { CHANGE_WORD } from './actions';

const initialState = {
  name: 'World'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WORD:
      return Object.assign({}, state, {
        name: action.text
      });
    default:
      return state
  }
};