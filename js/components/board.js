import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import List from './list';
import AddForm from './add-form';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.addList = this.addList.bind(this);
    }

    addList(title) {
        this.props.dispatch(
            actions.addList({
                title
            })
        );
    }

    render() {
        const lists = this.props.lists.map(list => <List key={list.id} {...list} />);
        return (
            <div className="board">
                <h1>Trello</h1>
                <div className="lists">
                    {lists}
                    <AddForm onAdd={this.addList} />
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return state;
};

export default connect(mapStateToProps)(Board);
