const titobj = {
    title: 'Heading',
    subtitle: 'Subhead',
    options: []
};
const onFormSub = (e) => {
    e.preventDefault();
    const option = e.target.elements.opt.value;
    if(option)
    {
        titobj.options.push(option);
        e.target.elements.opt.value=''; 
        deci();
    }
}
const remove = () =>{
    titobj.options=[];
    deci();
}
const deci = () => {
let title = <div>
    <h1>{titobj.title}</h1>
    {titobj.subtitle && <p>{titobj.subtitle}</p>}
    <p>{titobj.options.length>0 ? "options" : "no options"}</p>
    <p>{titobj.options.length}</p>
    <button onClick={remove}>Remove All</button> 
    <ol>
      {
        titobj.options.map((num) => {
            return <li key={num}>{num}</li>;  
        })  
      }      
    </ol>  
    <form onSubmit={onFormSub}>
      <input type="text" name="opt"/> 
      <button>Add option</button> 
    </form>
    </div>

ReactDOM.render(title,document.getElementById("app1"));
}

deci();