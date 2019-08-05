import React, { Fragment, Component } from 'react';
import { nameTemplate, labelAdd } from './constants';
import SubmittableInput from '../common/SubmittableInput';
import styles from './styles.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    const { userName, todoList, addTodoList, completeTodo } = this.props;
    const { value } = this.state;

    return (
      <Fragment>
        <div>{userName && nameTemplate(userName)}</div>
        {todoList.map(todo => (
          <div
            className={todo.done ? styles.done : null}
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
          >
            {todo.name}
          </div>
        ))}
        <SubmittableInput
          onSubmit={() => addTodoList([value])}
          onChange={(value) => this.setState({ value })}
          labelBtn={labelAdd}
          value={value}
        />
      </Fragment>
    );
  }
}

export default TodoList;
