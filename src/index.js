import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const category = (state = '', action) => {
    return state;
}

const storeInstance = createStore(
    combineReducers({
        category
    }),
    applyMiddleware(logger),
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
// registerServiceWorker();