import React from 'react';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        const text = this.textInput.value.trim();

        if (text) {
            this.props.onAdd(text);
            this.textInput.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" title="Text"
                       ref={ref => this.textInput = ref} />
                <button>Add</button>
            </form>
        );
    }
};
