import React from 'react';

const Option = (props) => 
       ( <div className="option">
        <p className="option__text">{props.count}.{ props.text}</p>
        <button
        className="button button--link" 
        onClick={(e) => {
            props.handleDeleteSingular(props.text)
        }
    }>Delete</button>

    </div>)
        

export default Option;

    // <button
    // className="button button--link" 
    // style={{marginLeft: '15px'}} onClick={()=>props.handleSelectOption(props.text)}>Select Option
   // </button>