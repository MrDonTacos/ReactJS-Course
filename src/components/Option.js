import React from 'react';

const Option = (props) => 
       ( <div>
        {props.text}
        
        <br/>
        <button 
        onClick={(e) => {
            props.handleDeleteSingular(props.text)
        }
    }>Delete</button>
    <button style={{marginLeft: '15px'}} onClick={()=>props.handleSelectOption(props.text)}>Select Option</button>
    </div>)
        

export default Option;