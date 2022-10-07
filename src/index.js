import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';


ReactDOM.render(
    <Provider store={storeInstance}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
