//Create app object title/subtitle
//use title/subtyitle in the template
//render the template

var appRoot = document.getElementById('app');

const app = {
    Title: "Indecision app",
    SubTitle: "Put something Here",
    Options: ["Uno","Dos"]
}

const reset = () => {
    app.Options.pop();
    renderizado();
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.option.value;
    console.log(option);
    if(option){
        app.Options.push(option);
        e.target.elements.option.value = ''
        renderizado();
    }
    
}


const renderizado = () => {
    const template = (
        <div>
        <h1>Saúl Cañedo Castillo</h1> 
        <p>This is some info</p>
        <p>{app.Options.length}</p>
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        <br/>
        <button onClick={reset}>Reset Options</button>
        </form>
        </div>
        );
        ReactDOM.render(template, appRoot)
    } 


renderizado();





