import React, {Fragment} from 'react';
import TodoList from '../TodoList';
import Greeting from '../Greeting';

const GreetingContainer = (props) => (
    <Fragment>
      <Greeting />
      <TodoList />
    </Fragment>
);

export default GreetingContainer;
