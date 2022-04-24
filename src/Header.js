import React from 'react'
import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <NavLink to="/" activeStyle={{color:'tomato'}} end>Home</NavLink> |{' '}
        <NavLink to="sobre" activeStyle={{color:'tomato'}}>Sobre</NavLink> | {' '}
        <NavLink to="login" activeStyle={{color:'tomato'}}>Login</NavLink> 


        <h1>Header</h1>
        <p>Este é o Header</p>
    </nav>
  )
}

export default Header;