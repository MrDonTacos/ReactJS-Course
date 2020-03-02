class Contador extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            counter: 0,
            name: 'Saul Cañedo Castillo'
        }
        console.log(this.state);
    }

    componentDidMount(){
            const count = localStorage.getItem('num');
            if(!isNaN(localStorage.getItem('num'))){
            this.setState(()=> ({counter: parseInt(count, 10)}))
        }
        else{

        }
    }

    componentDidUpdate(prevProp,prevState){
        if(prevState.counter !== this.state.counter)
        localStorage.setItem('num', this.state.counter)
        else{

        }
            }

    componentWillUnmount(){

    }

    handleAddOne() {
        // this.state.counter +=1;
        this.setState((prevState) => { //Give us the prevState of the object
            return {
                counter: prevState.counter +1 //Doesn't affect other properties
            }
        });
     
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



ReactDOM.render(<Contador/>, document.getElementById("app"))