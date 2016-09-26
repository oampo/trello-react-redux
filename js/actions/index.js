import 'isomorphic-fetch';

export function fetchLists() {
    return (dispatch) => {
        return fetch('http://localhost:3000/lists?_embed=cards').then(
            response => response.json()
        ).then(
            lists => dispatch(fetchListsSuccess(lists))
        );
    };
};

export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export function fetchListsSuccess(lists) {
    return {
        type: FETCH_LISTS_SUCCESS,
        lists
    }
};

export function addList(list) {
    return (dispatch) => {
        return fetch('http://localhost:3000/lists', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(list)
        }).then(response => {
            if (response.status < 200 || response.status > 300) {
                throw error;
            }
            return response.json();
        }).then(
            list => dispatch(addListSuccess(list))
        );
    };
};

export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export function addListSuccess(list) {
    return {
        type: ADD_LIST_SUCCESS,
        list
    };
};

export function addCard(card) {
    return (dispatch) => {
        return fetch('http://localhost:3000/cards', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(card)
        }).then(response => {
            if (response.status < 200 || response.status > 300) {
                throw error;
            }
            return response.json();
        }).then(
            card => dispatch(addCardSuccess(card))
        );
    };
};

export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export function addCardSuccess(card) {
    return {
        type: ADD_CARD_SUCCESS,
        card
    };
};
