import React from 'react';
import NavBarItemsR from '../NavBarItems/NavigationItemsR';
import NavBarItemsl from '../NavBarItems/NavBarItemsL';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Ui/logo/logo';
import './ToolBar.scss';

const ToolBar = (props) => {
    return (

        <div>
            <header className='Toolbar'>
                <DrawerToggle clicked={props.drawerToggleclicked} />
                <nav className='DesktopOnly'>
                    <NavBarItemsl />
                    <NavBarItemsR />
                </nav>
                <div className='Pinwork-Logo'>
                <Logo />
            </div>
            </header>
       
         
        </div>
    );

}
export default ToolBar;