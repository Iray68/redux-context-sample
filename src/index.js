import { render } from 'react-dom';
import React from 'react';
import App from './App';
import { StoreProvider } from './stores';

const Home = (props) => (
    <StoreProvider>
        <App />
    </StoreProvider>
);

render(<Home />, document.getElementById('app'));