import React from 'react'

const Action = (props) =>(
        <div>
        <button onClick={props.handlePick}
        disabled={!props.hasOption}>
        What should I Do
        </button>
        </div>)

export default Action;