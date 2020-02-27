let visibility = false;

const renderRoot = document.getElementById("app");

const toogleVisibility = () => {
    visibility = !visibility;
    render();
    console.log(visibility);
}

const itsTrue = () => {
    if(visibility)
    return <h1>True</h1>
    else
    return <h1>False</h1>
}

const render = () => {
    const jsx = (
        <div>
        <h1>Visibility Toogle</h1>
        <button onClick={toogleVisibility}>
        {visibility ? 'Hide Details': 'Show details'}
        </button>
        {
            // visibility && (
            //     <h1>True</h1>
            // )
            itsTrue()
        }
        </div>
    )
    ReactDOM.render(jsx,renderRoot);
}

render();