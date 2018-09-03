
class Toggle extends React.Component{
    constructor(props)
    {
        super(props);
        this.hideVisibility = this.hideVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }

    hideVisibility()
    {
        this.setState((preState) =>{
            return {
            visibility : !(preState.visibility)
            }
        });
    }

    render()
    {
        return (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.hideVisibility}>
        {this.state.visibility ? 'hide details' : 'show details'}</button>
        {this.state.visibility && <p>{'Hey! This is React proj'}</p>}
        </div>)
    
      
    }
}
ReactDOM.render(<Toggle />,document.getElementById("tog"));


//***********************class**************************
// class Person{
//     constructor(name='Anonymous',age=0)
//     {
//         this.name=name;
//         this.age=age
//     }
//     getDescription()
//     {
//         return `${this.name} is ${this.age} year(s) old`
//     }
//     getGreeting()
//     {
//         return `Hi I'm ${this.name}!`
//     }
// }

// class Traveller extends Person{
//     constructor(name,age,home)
//     {
//         super(name,age);
//         this.home=home
//     }

//     getGreeting()
//     {
//         let greeting = super.getGreeting();

//         if(this.home)
//         {
//             greeting += ` I'm visiting from ${this.home}`
//         }

//         return greeting;
//     }
// }


// const me = new Person("Muhila","24")
// console.log(me.getDescription());

// const x = new Person()
// console.log(x.getDescription());

// const muhi = new Traveller("Muhila","24","Chennai")
// console.log(muhi.getGreeting());

// const y = new Traveller()
// console.log(y.getGreeting());