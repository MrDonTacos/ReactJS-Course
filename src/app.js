class IndecisionApp extends React.Component  {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options : []
            }
        })
    }

    handleAddOption(option) {
        if(!option){
            return 'Enter a valid value to add item'
        } else if(this.state.options.indexOf(option) > -1){
            return 'The element already exist'
        }
        this.setState((prevState)=> {
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    handlePick() {
      alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOption={this.state.options.length > 0} 
                handlePick={this.handlePick}/>
                <Options options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}/>
            </div>

        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
            <h1>Title: {this.props.title}</h1>
            <h2>Subtitle: {this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.handlePick}
            disabled={!this.props.hasOption}>
            What should I Do
            </button>
            </div>
        );
    }
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
        this.setState(()=>{
            return{ error }
        })
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

class Option extends React.Component {
    render(){
        return (
            <div>
            {this.props.text}
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove all</button>
            <ol>{
                this.props.options.map((texto, i)=> <Option key={i} text={texto}/>)
            }
            </ol>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))