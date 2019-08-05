import { ADD_TODO_LIST, COMPLETE_TODO } from './actions';
import { createReducer, updateObject } from '../util';

const initialState = {
  todoList: []
};

const addTodoList = (state, action) => {
  return updateObject(state, {
    todoList: state.todoList.concat(
      action.todoList.map(todo => ({
        id: `${Date.now()}${todo}`,
        name: todo,
        done: false
      }))
    )
  });
};

const completeTodo = (state, action) => {
  return updateObject(state, {
    todoList: state.todoList.map(todo => {
      if (todo.id === action.id) {
        return updateObject(todo, { done: true });
      }

      return todo;
    })
  });
};

export default createReducer(initialState, {
  [ADD_TODO_LIST]: addTodoList,
  [COMPLETE_TODO]: completeTodo
});
