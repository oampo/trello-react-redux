import React from 'react';

import List from './list';
import AddForm from './add-form';

export default function Board(props) {
    const lists = props.lists.map(list => <List key={list.id} {...list} />);
    return (
        <div className="board">
            <h1>Trello</h1>
            <div className="lists">
                {lists}
                <AddForm />
            </div>
        </div>
    );
}

Board.defaultProps = {
    lists: []
};
