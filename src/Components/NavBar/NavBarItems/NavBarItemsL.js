import React from 'react';
import './NavBarItemsR.css';
import NavigationItem from './NavBarItem/NavBarItem';


const navigationItemsL = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link='/download' > دانلود اپلیکیشن</NavigationItem>
        <NavigationItem link='/login'>ثبت نام / ورود</NavigationItem>
        <NavigationItem link='/login'>
            <p style={{textDecoration:'underline'}}>
                    کسب درامد
            </p>
            </NavigationItem>
    </ul>

);
export default navigationItemsL;