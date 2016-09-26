import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';


ReactDOM.render(
    <Board lists={
        [{
            id: 0,
            title: 'First list',
            cards: [{
                id: 0,
                text: 'Example card'
            }, {
                id: 1,
                text: 'Another card'
            }]
        }, {
            id: 1,
            title: 'Second list',
            cards: [{
                id: 0,
                text: 'Example card'
            }, {
                id: 1,
                text: 'Another card'
            }]
        }]
    } />, document.getElementById('app'));
