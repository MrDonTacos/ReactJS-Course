import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
        {props.options.length === 0 && <p>Add an option</p>}
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


export default Options;