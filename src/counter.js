//***********************rerender using state compo***********/


class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : props.count
        }
    }

    handleAddOne()
    {
        this.setState((preState) => {
            return {
                count : (preState.count) + 1
            }
        });
        console.log('handleAddOne')
    }
    handleMinusOne()
    {  
        this.setState((preState) => {
            return {
                count : preState.count - 1
            }
        });
        console.log('handleMinusOne')
    }
    handleReset()
    {
        this.setState(() => {
            return {
                count : 0
            }
        });
        console.log('handleReset')
    }
    render()
    {
        return(
            <div>
                <h1>COUNTER : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count : 0
}

ReactDOM.render(<Counter />,document.getElementById("state"));