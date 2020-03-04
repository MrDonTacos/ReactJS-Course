import React from 'react'

const Header = (props) =>
        (<div>
        <h1>Title: {props.title}</h1>
       {props.subtitle&& <h2>Subtitle: {props.subtitle}</h2>}
        </div>)

Header.defaultProps= {
    title: 'Indecision',
}


export default Header