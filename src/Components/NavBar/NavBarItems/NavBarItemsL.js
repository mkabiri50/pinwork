import React from 'react';
import './NavBarItemsL.css';
import NavigationItem from './NavBarItem/NavBarItem';
import Badge from '../../../assets/logo/Ellipse.png';
import Line from '../../../assets/logo/Line.png';

const navigationItemsL = (props) => (
    <div>
    <ul className='Left'>
        <NavigationItem link='/download' > دانلود اپلیکیشن</NavigationItem>
        <NavigationItem link='/login'>ثبت نام / ورود</NavigationItem>
        <NavigationItem link='/login'> کسب درامد   </NavigationItem>
    </ul>
    <img src={Badge} alt='' className='Badge' />
    <img src={Line} alt='' className='Line' />
    </div>


);
export default navigationItemsL;