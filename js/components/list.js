import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';
import Card from './card';
import AddForm from './add-form';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this)
    }

    addCard(text) {
        this.props.dispatch(
            actions.addCard({
                text,
                listId: this.props.id
            })
        );
    }

    render() {
        const cards = this.props.cards.map((card, index) => <Card key={index} {...card} />);
        return (
            <div className="list">
                <h3>{this.props.title}</h3>
                {cards}
                <AddForm onAdd={this.addCard} />
            </div>
        );
    }
};

List.defaultProps = {
    title: '',
    cards: []
};

export default connect()(List);
