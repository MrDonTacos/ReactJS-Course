// let visibility = false;

// const renderRoot = document.getElementById("app");

// const toogleVisibility = () => {
//     visibility = !visibility;
//     render();
//     console.log(visibility);
// }

// const itsTrue = () => {
//     if(visibility)
//     return <h1>True</h1>
//     else
//     return <h1>False</h1>
// }

// const render = () => {
//     const jsx = (
//         <div>
//         <h1>Visibility Toogle</h1>
//         <button onClick={toogleVisibility}>
//         {visibility ? 'Hide Details': 'Show details'}
//         </button>
//         {
//             // visibility && (
//             //     <h1>True</h1>
//             // )
//             itsTrue()
//         }
//         </div>
//     )
//     ReactDOM.render(jsx,renderRoot);
// }

// render();

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state ={
            visibility: false
        }
    }

    handleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
            })
    }
    
    render() {
        return(
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.handleVisibility}>
                {this.state.visibility? 'Hide details' : 'Show details'}
                </button>
                {
                    this.state.visibility&& (
                        <h1>Details</h1>
                    )
                }
            </div>
        );
}
}

ReactDOM.render(<Visibility/>, document.getElementById("app"))