import React from 'react';
import  './NavBarItem.css';
import {NavLink} from 'react-router-dom';
const NavBarItem = (props) => (
   <li className='NavigationItem'> 
   <NavLink 
    to ={props.link} 
    exact
    activeClassName='active'>
  {props.children }</NavLink>
</li>
);
export default NavBarItem;  