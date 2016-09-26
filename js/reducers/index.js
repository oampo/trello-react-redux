import * as actions from '../actions/index';

const initialState = {
    lists: []
};

export default function reducer(state=initialState, action) {
    if (action.type === actions.FETCH_LISTS_SUCCESS) {
        return Object.assign({}, state, {
            lists: action.lists
        });
    }
    else if (action.type === actions.ADD_LIST_SUCCESS) {
        return Object.assign({}, state, {
            lists: state.lists.concat(action.list)
        });
    }
    else if (action.type === actions.ADD_CARD_SUCCESS) {
        let lists = state.lists.map((list) => {
            if (list.id !== action.card.listId) {
                return list;
            }
            return Object.assign({}, list, {
                cards: (list.cards || []).concat(action.card)
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    return state;
};
