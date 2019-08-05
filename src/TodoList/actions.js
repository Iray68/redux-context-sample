export const ADD_TODO_LIST = 'ADD_TODO_LIST';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodoList = (todoList) => {
  return { type: ADD_TODO_LIST, todoList }
};

export const completeTodo = (id) => {
  return { type: COMPLETE_TODO, id }
};