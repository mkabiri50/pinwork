import React from 'react';
import NavBarItemsR from '../NavBarItems/NavigationItemsR';
import NavBarItemsl from '../NavBarItems/NavBarItemsL';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import './ToolBar.css';

const ToolBar = (props) => {

    return (
        // <div className='ToolBar'>
        //   <DrawerToggle clicked={props.drawerToggleclicked} />
        //     <div className='NavigationItems'>
        //             <NavBarItemsl />
        //             <NavBarItemsR />
        //             <Logo />
        //     </div>


        // </div>
        <header className='Toolbar'>
            <DrawerToggle clicked={props.drawerToggleclicked} />
            <nav className='DesktopOnly'>
                <NavBarItemsl />
                <NavBarItemsR />    
            </nav>
        </header>

    );

}
export default ToolBar;