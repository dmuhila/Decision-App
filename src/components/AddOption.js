import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            err: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const addopt = e.target.elements.opts.value;
        const err = this.props.handleAddOption(addopt);
        this.setState(() => ({ err:err }))
    }
    render() {
        return (
            <div>
                {this.state.err && <p>{this.state.err}</p>}
                {this.addopt && <p>{this.addopt}</p>}
                <form onSubmit={this.handleAddOption}>
                    <p>{this.props.options}</p>
                    <input type='text' name='opts' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

