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
     

    </div>


);
export default navigationItemsR;