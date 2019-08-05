import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import todos from './TodoList/reducers';
import greeting from './Greeting/reducers';
import App from './App';

const store = createStore(combineReducers({
  todos, greeting
}));

const Home = (props) => (
    <Provider store={store}>
        <App />
    </Provider>
);

render(<Home />, document.getElementById('app'));