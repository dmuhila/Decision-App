import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

export default class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handPick = this.handPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [], //['1 thing',' 2 thing',' 3 thing']
            selectOption: undefined 
        }
    }
    handleSelectOption(){
        this.setState(() => ({selectOption : undefined}))
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handPick() {
        const res = Math.floor(Math.random() * this.state.options.length);
        const inf = this.state.options[res];
        this.setState(() => ({ selectOption: inf}))
    }
    handleAddOption(add) {
        if (!add) {
            return 'enter valid data'
        }
        else if (this.state.options.indexOf(add) > -1) {
            return 'Enter unique data'
        }
        this.setState((preState) => (
            {
                options: preState.options.concat(add)
            }
        ))

    }
    render() {
        const title = 'DECISION APP';
        const subtitle = 'Make a decision';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handPick={this.handPick} />
                <Options opt={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption title={this.state.options}
                    handleAddOption={this.handleAddOption} />
                <OptionModal selectOption={this.state.selectOption}
                handleSelectOption={this.handleSelectOption}/>    
            </div>
        )
    }
}