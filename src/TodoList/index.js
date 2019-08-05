import React from 'react';
import { addTodoList, completeTodo } from './actions';
import { connect } from '../stores';
import TodoList from './TodoList';

const mapStateToProps = state => {
  return {
    todoList: state.todos.todoList,
    userName: state.greeting.name
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoList: (todos) => {
      dispatch(addTodoList(todos))
    },
    completeTodo: (id) => {
      dispatch(completeTodo(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

