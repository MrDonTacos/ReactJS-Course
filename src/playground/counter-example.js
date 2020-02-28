class Contador extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            counter: props.counter,
            name: 'Saul Cañedo Castillo'
        }
    }

    handleAddOne() {
        // this.state.counter +=1;
        this.setState((prevState) => { //Give us the prevState of the object
            return {
                counter: prevState.counter +1 //Doesn't affect other properties
            }
        });
        console.log(this.state.counter);
    }

    handleMinusOne() {
        // alert('Handle minus one is going to fire');
        this.setState((prevState)=> {
            return {
                counter: prevState.counter-1
            }
        })
    }

    handleReset() {
        // alert('Handle reset is going to fire');
        this.setState(() => {
            return {
                counter: 0
            }
        })
    }


    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Contador.defaultProps = {
    counter: 0
}

ReactDOM.render(<Contador counter={50}/>, document.getElementById("app"))