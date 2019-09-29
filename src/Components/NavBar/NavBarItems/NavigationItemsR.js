import React from 'react';
import './NavBarItemsR.css';
import NavigationItem from './NavBarItem/NavBarItem';


const navigationItemsR = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/Web' exact={props.exact}> وبلاگ</NavigationItem>
        <NavigationItem link='/All' > همه خدمات </NavigationItem> 
    </ul>

);
export default navigationItemsR;