// Stateless functiona component

class IndecisionApp extends React.Component  {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteSingular = this.handleDeleteSingular.bind(this);
        this.state = {
            options : props.options
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({options : [] }))
    }

    handleAddOption(option) {
        if(!option){
            return 'Enter a valid value to add item'
        } else if(this.state.options.indexOf(option) > -1){
            return 'The element already exist'
        }
        this.setState((prevState)=> ({
             options: prevState.options.concat([option])
         }))
    }

    handlePick() {
      alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }

    handleDeleteSingular(option) {
        console.log(option);
        this.setState((prevState)=> ({
            options: prevState.options.filter(e=>e!==option)
        }))
    }

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return(
            <div>
                <Header />
                <Action hasOption={this.state.options.length > 0} 
                handlePick={this.handlePick}/>
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteSingular={this.handleDeleteSingular}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}/>
            </div>

        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) =>{
    return (
        <div>
        <h1>Title: {props.title}</h1>
       {props.subtitle&& <h2>Subtitle: {props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps= {
    title: 'Indecision',
}

const Action = (props) =>{
    return (
        <div>
        <button onClick={props.handlePick}
        disabled={!props.hasOption}>
        What should I Do
        </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({ error }))
    }

    render (){
        return (
            <div>
            {this.state.error&& <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <li>
        {props.text}
        <br/>
        <button 
        onClick={(e) => {
            props.handleDeleteSingular(props.text)
        }
        }>Delete</button>
        </li>
        
    )
}
const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        
        <ol>{
            props.options.map((texto, i)=> (
                <Option 
                key={i} 
                text={texto}
                handleDeleteSingular={props.handleDeleteSingular}
                />))
        }
        </ol>
        </div>
    );
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// } //Stateless Funcional Component


ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']}/>, document.getElementById("app"))