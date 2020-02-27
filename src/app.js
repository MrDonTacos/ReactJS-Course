let num=0;
let option = ['Option one', 'Option two', 'Option Three'];
const obj = {
    name: 'Osvaldo',
    getName() {
        return this.name;
    }
}

const getName = obj.getName.bind(obj);
console.log(getName());

class Header extends React.Component{
    render(){
        const props = this.props;
        return (
            <div>
            <h1>Title: {props.title}</h1>
            <h2>Subtitle: {props.subtitle}</h2>
            </div>
        );
    }
}

const renderizar = () => {

    class IndecisionApp extends React.Component {
        render () {
            return (
                <div>
                <Header title={num} subtitle={num-1}/>
                <Option />
                <br/>
                <Action />
                <br/>
                <AddOption />
                <br/>
                <Sumar />
                </div>
                );
            }
            
        }
        ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))
    }


class Action extends React.Component {
    adivinar() {
        let alerta = Math.floor(Math.random() * option.length);
        let mensaje = option[alerta];
        alert(mensaje);
    }
    render() {
        return (
            <div>
            <button onClick={this.adivinar}>What should I Do</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    createOption(e){
        e.preventDefault();
        const er = e.target.elements.option.value.trim;
        if(er=='')
        option.push(er);
        e.target.elements.option.er = '';
        renderizar();

    }
    render (){
        return (
            <form onSubmit={this.createOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
            Option component here:
            
            <Options options={option}/>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        // alert('Are you shure you want to eliminate all?')
        console.log(this.props.options);
    }

    eliminate() {
        option = [];
        renderizar();
    }


    render() {
        return (
            <div>
            <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button>
            <ol>
            {this.props.options.map((texto, i)=> <li key={i}>{texto}</li>)}
            </ol>
            </div>
        );
    }
}



const sumar = () =>{
    num ++;
    renderizar();
}

class Sumar extends React.Component{
    render(){
        return(
            <button onClick={sumar}>Sumar</button>
        );
    }
}


renderizar();
//React.Component really important