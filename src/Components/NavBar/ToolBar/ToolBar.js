import React from 'react';
import NavBarItemsR from '../NavBarItems/NavigationItemsR';
import NavBarItemsl from '../NavBarItems/NavBarItemsL';
import Logo from '../../Ui/logo/logo';

import './ToolBar.css';

const ToolBar = (props) => {

    return (
        <div className='ToolBar'>
            <div className='NavigationItems'>
          
                    <NavBarItemsl />
                    <NavBarItemsR />
                    <Logo />
           

            </div>
    

        </div>


    );

}
export default ToolBar;