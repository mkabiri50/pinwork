import React from 'react';
import  './NavBarItem.css';
import {NavLink} from 'react-router-dom';
const NavBarItem = (props) => (
   <li className='NavBarItem'> 
   <NavLink 
    to ={props.link} 
    exact
    activeClassName='active'>
  {props.children }</NavLink>
</li>
);
export default NavBarItem;  