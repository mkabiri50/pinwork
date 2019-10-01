import React from 'react';
import NavBarItemsR from '../NavBarItems/NavigationItemsR';
import NavBarItemsl from '../NavBarItems/NavBarItemsL';
import Logo from '../../Ui/logo/logo';
import Badge from '../../../assets/logo/Ellipse.png';
import Line from '../../../assets/logo/Line.png';
import './ToolBar.css';

const ToolBar = (props) => {

    return (
        <div className='ToolBar'>
            <div className='NavBarItems'> 
                <div className='NavBarItemsR'>
                    <NavBarItemsl />

                </div>

                <div className='NavBarItemsR'>
                    <NavBarItemsR />
                    <Logo />
                </div>
            </div>


        </div>
        // <img src={Badge} alt='' className='Badge' />
        // <img src={Line} alt='' className='Line' />

    );

}
export default ToolBar;