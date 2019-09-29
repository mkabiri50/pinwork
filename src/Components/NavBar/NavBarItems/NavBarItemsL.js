import React from 'react';
import './NavBarItemsR.css';
import NavigationItem from './NavBarItem/NavBarItem';


const navigationItemsL = (props) => (
    <ul className='NavigationItems'>
            <NavigationItem link='/login'>کسب درامد</NavigationItem>
        <NavigationItem link='/login'>ثبت نام / ورود</NavigationItem>
        <NavigationItem link='/download' > دانلود اپلیکیشن</NavigationItem> 
    </ul>

);
export default navigationItemsL;