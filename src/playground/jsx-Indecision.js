//Create app object title/subtitle
//use title/subtyitle in the template
//render the template

var appRoot = document.getElementById('app');

const app = {
    Title: "Indecision app",
    SubTitle: "Put something Here",
    Options: ["Saludos","Mundo","Segundo"]
}

const reset = () => {
    app.Options.pop();
    renderizado();
}

const makeADecision =() => {
    const num = Math.floor(Math.random() * app.Options.length)
    const option = app.Options[num];
    alert(option);
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
        {app.Options.map((number,i) => <div key={i}>
            <li>{number}</li>
            </div>
        )}
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        <br/>
        <button onClick={reset}>Reset Options</button>
        <br/>
        <button onClick={makeADecision}>What do I choose?</button>
        </form>
        </div>
        );
        ReactDOM.render(template, appRoot)
    } 


renderizado();





