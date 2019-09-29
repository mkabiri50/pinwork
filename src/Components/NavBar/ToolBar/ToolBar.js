import React from 'react';
import NavBarItemsR from '../NavBarItems/NavigationItemsR';
import NavBarItemsl from '../NavBarItems/NavBarItemsL';
import Logo from '../../Ui/logo/logo';
import './ToolBar.css';

const ToolBar = (props) => {

    return (
        <div className='ToolBar'>
               <div className='NavBarItemsR'>
            <NavBarItemsl />
         
            </div>
            <div className='NavBarItemsR'>
            <NavBarItemsR  />
            <Logo />
            </div> 
         
        </div>
    );

}
export default ToolBar;