import React from 'react';

import NavBarItemsR from '../NavBarItems/NavBarItems';

import './ToolBar.css';

const ToolBar = (props) => {

    return (
        <div className='Toolbar'>
            <nav className="DesktopOnly">
            <NavBarItemsR color={props.color} />
            </nav>
        </div>
    );

}
export default ToolBar;