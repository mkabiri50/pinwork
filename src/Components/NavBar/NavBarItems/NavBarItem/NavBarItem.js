import React from 'react';
import  './NavBarItem.css';
import {NavLink} from 'react-router-dom';
const NavBarItem = (props) =>{
let classNav= "NavBarItem";

if(props.activeJoon){

  classNav= "activelink NavBarItem"
}

  return(<li className={classNav}> 
  <NavLink 
   to ={props.link} 
   exact
   activeClassName='active'
   
>
 {props.children }</NavLink>
</li>)
} 
export default NavBarItem;  