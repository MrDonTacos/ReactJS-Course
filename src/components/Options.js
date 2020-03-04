import React from 'react'
import Option from './Option'

const Options = (props) => 
(
        <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button onClick={props.handleDeleteOptions} className="button button--link">Remove all</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Add an option</p>}
       {
            props.options.map((texto, i)=> (
                <Option 
                key={i} 
                text={texto}
                count={i +1}
                handleDeleteSingular={props.handleDeleteSingular}
                handleSelectOption={props.handleSelectOption}
                />))
        } 
        
        </div>)


export default Options;