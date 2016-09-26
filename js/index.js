import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import { addList, addCard } from './actions';
import reducer from './reducers';
import Board from './components/board';


let store = createStore(reducer);
store.dispatch(addList({
    id: 2,
    title: 'Test list'
}));
store.dispatch(addCard({
    id: 5,
    listId: 2,
    text: 'Test card'
}));


ReactDOM.render(
    <Board lists={store.getState().lists} />
, document.getElementById('app'));
