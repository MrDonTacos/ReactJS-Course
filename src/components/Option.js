import React from 'react';

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
        <button style={{marginLeft: '15px'}} onClick={props.handleChangeColor}>Change color</button>
        </li>
        
    )
}

export default Option;