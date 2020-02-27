let num=0;
let option = ['Option one', 'Option two', 'Option Three'];


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
                <Action />
                <AddOption />
                <Sumar />
                </div>
                );
            }
            
        }
        ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))
    }

class Action extends React.Component {
    render() {
        return (
            <div>
            <button>What should I Do</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render (){
        return (
            <p>Your choose</p>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
            Option component here:
            
            <Options objeto={option}/>
            </div>
        )
    }
}

class Options extends React.Component {
    
    render() {
        const props = this.props;
        return (
            <ol>
                {props.objeto.map((texto, i)=> <li key={i}>{texto}</li>)}
            </ol>
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