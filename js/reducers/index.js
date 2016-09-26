import * as actions from '../actions/index';

const initialState = {
    lists: [{
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
};

export default function reducer(state=initialState, action) {
    if (action.type === actions.ADD_LIST) {
        return Object.assign({}, state, {
            lists: state.lists.concat(action.list)
        });
    }
    else if (action.type === actions.ADD_CARD) {
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
