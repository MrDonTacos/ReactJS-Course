import React from 'react'
import Option from './Option'

const Options = (props) => 
        (<div>
        {props.options.length === 0 && <p>Add an option</p>}
        <button onClick={props.handleDeleteOptions}>Remove all</button>{
            props.options.map((texto, i)=> (
                <Option 
                key={i} 
                text={texto}
                handleDeleteSingular={props.handleDeleteSingular}
                handleSelectOption={props.handleSelectOption}
                />))
        }
        
        </div>)


export default Options;