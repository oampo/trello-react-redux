import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

import reducer from './reducers';
import Board from './components/board';


let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Board />
    </Provider>
, document.getElementById('app'));
