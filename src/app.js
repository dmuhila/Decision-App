//******Below are JSX Examples*******************

const temptwo = <div>
    <h1>Name:Muhi</h1>
    <p>Age:26</p>
    <p>Loc:Chennai</p>
    </div>

ReactDOM.render(temptwo,document.getElementById("app"));

const titobj = {
    title: 'Heading',
    subtitle: 'Subhead',
    options: ['one','two']
};
function options(opt)
{
    if(opt)
    {
        return opt;
    }
    else
    {
        return 'no opt';
    }
};
let title = <div>
    <h1>{titobj.title}</h1>
    {titobj.subtitle && <p>{titobj.subtitle}</p>}
    <p>{options(titobj.options)}</p>
    </div>

ReactDOM.render(title,document.getElementById("app1"));

const fullname= 'Piya Kumar';
// const spl =(full) => {
//     return full.split(' ')[0];
// }

const spl = (full) => full.split(' ')[0];
console.log(spl(fullname));

//*************MAP************
const multiplier={
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num)=> num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());

//*************button ***/
let count = 0;
const decrement = () => {
    count--;
    renderApp();
    //console.log("minus one");
}
const reset = () =>{
    count = 0;
    renderApp();
    //console.log('reset');
}
const renderApp = () =>{
const a = <div>
    <h1>count:{count}</h1>
    <button onClick={decrement}>-1</button>
    <button onClick={reset}>RESET</button>
    </div>
ReactDOM.render(a,document.getElementById("app2"));
}
renderApp();
//using variables in JSX
let name = 'Muhila Arunprabu'

//using function in JSX
const alertName = (event) => {
    event.preventDefault();
    alert('muhila i love you')
}

//use another jsx variable
const search = (<div>
    <input name='search' type='text'></input>
    <button>Search</button>
</div>)

const html = (<div><p>this is a para</p>
    {search}</div>
);

//example for if condition with value
const getLocation = (loc) => {
    if (loc) {
        return (<p>{loc}</p>);
    } else {
        return null;
    }
}

let locat = 'london';

const ifex = (<div>
    {getLocation(locat)}
</div>);

//using arrays
/**
 * arrayList.forEach(function(ele,index,arr){
  console.log(ele);
  console.log(index);
  console.log(arr);
});
 */

const arrayList = ['arun', 'muhila', 'prabu']

const jsx = (
    <div>
        <p>Name : {name}</p>
        {html}
        {ifex}
        {arrayList.map((ele) => {
            return (<p>{ele}</p>)
        })}
        <a href="#" onClick={alertName}>Click here</a>
    </div>);


ReactDOM.render(jsx, document.getElementById("jsx"));


//Below are React components examples

class Header extends React.Component {
    render() {
        return (<p>Header of {this.props.aName}</p>)
    }
}

class Footer extends React.Component {
    render() {
        return (<p>Footer</p>)
    }
}

class Body extends React.Component {
    render() {
        return (<p>Body</p>)
    }
}

class App extends React.Component {

    render() {
        const appName = 'Muhila';
        return (<div>
            My First React class
            <Header aName={appName} />
            <Body />
            <Footer />
        </div>)
    }
}

const appVar = (
    <App />
)

//ReactDOM.render(appVar , document.getElementById('react-class'));
ReactDOM.render(<App />, document.getElementById('react-class'));


