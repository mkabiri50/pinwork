import React from 'react';
import './NavBarItemsR.scss';
import NavigationItem from './NavBarItem/NavBarItem';
import Logo from '../../Ui/logo/logo';

const navigationItemsR = (props) => (
    <div className='Right' >
        <ul >
            <NavigationItem link='/Web' exact={props.exact}> وبلاگ</NavigationItem>
            <NavigationItem link='/All' > همه خدمات </NavigationItem>
        </ul>
        <div className='Pinwork-Logo'>
            <Logo />
        </div>

    </div>


);
export default navigationItemsR;