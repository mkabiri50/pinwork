import React from 'react';
import NavBarItemsl from  '../NavBarItems/NavBarItemsL';
import NavBarItemsR from '../NavBarItems/NavigationItemsR';
import Logo from '../../Ui/logo/logo';
import './SideDrawer.scss';
import Bachdrop from './../../Ui/Backdrop/Backdrop';
const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }

    return (
        <React.Fragment>
            <Bachdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}
                onClick={props.closed}>
                <div className='Side-Logo'>
                    <Logo />
                </div>
                <nav>
                    <NavBarItemsl />
                    <NavBarItemsR />
                </nav>
            </div>
        </React.Fragment>

    )
}
export default sideDrawer;
