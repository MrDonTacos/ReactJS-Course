import React from 'react'

const Header = (props) =>
        (<div className="header">
        <div className="container">
        <h1 className="header__title">Title: {props.title}</h1>
        <h4 className="header__subtitle">Put your life in the hands of a machine</h4>
        </div>
        </div>)

Header.defaultProps= {
    title: 'Indecision',
}


export default Header