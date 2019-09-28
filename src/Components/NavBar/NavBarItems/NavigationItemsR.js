import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/Web' exact={props.exact}> وبلاگ</NavigationItem>
        <NavigationItem link='/All' > همه خدمات </NavigationItem> 
    </ul>

);
export default navigationItems;
