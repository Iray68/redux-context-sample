import { useGreetingReducer } from './Greeting/reducers';
import { useTodoReducer } from './TodoList/reducers';
import { combineReducers } from './util';

export const createStore = () =>
  combineReducers({ greeting: useGreetingReducer(), todos: useTodoReducer() });
