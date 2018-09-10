//***********************rerender using state compo***********/


class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0
        }
    }
    componentDidMount()
    {
        try{
        const a = localStorage.getItem('count');
        const count = parseInt(a,10);
            if(count && !isNaN(count))
            {
                this.setState(() => ({ count }));
            }
        }
        catch(e)
        {

        }
    }
    componentDidUpdate(preProps,preState)
    {
        if(preState.count !== this.state.count)
        {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
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
                count : (preState.count) - 1
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


ReactDOM.render(<Counter />,document.getElementById("state"));