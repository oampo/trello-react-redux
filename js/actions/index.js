import 'isomorphic-fetch';

export const ADD_LIST = 'ADD_LIST';
export function addList(list) {
    return {
        type: ADD_LIST,
        list
    };
};

export const ADD_CARD = 'ADD_CARD';
export function addCard(card) {
    return {
        type: ADD_CARD,
        card
    };
};
