class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handPick = this.handPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []//['1 thing',' 2 thing',' 3 thing']
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handPick() {
        const res = Math.floor(Math.random() * this.state.options.length);
        const inf = this.state.options[res];
        alert(inf);
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
            </div>
        )
    }
}

    const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        )
    }


   const Action = (props) => {
        return (
            <div>
                <button
                    onClick={props.handPick}
                    disabled={!props.hasOptions}>
                    What to do
        </button>
            </div>
        )
    }

   const Options = (props) => {
        return (
            <div>
                <p>Options component here</p>
                <button onClick={props.handleDeleteOptions}>
                    Remove All</button>
                <p>{props.opt.length}</p>
                {
                    props.opt.map((num) =>
                        <Option key={num}
                            opttext={num} />
                        //  <li key={num}>{num}</li>;  
                    )
                }
            </div>
        )
    }


class AddOption extends React.Component {
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

const Option = (props) => {
        return (
            <div>
                {props.opttext}
            </div>
        )
    }


ReactDOM.render(<Indecision />, document.getElementById("comp"));

