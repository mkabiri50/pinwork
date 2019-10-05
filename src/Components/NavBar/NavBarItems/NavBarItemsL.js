import React from 'react';
import './NavBarItemsL.scss';
import NavigationItem from './NavBarItem/NavBarItem';
import Badge from '../../../assets/logo/Ellipse.png';

const navigationItemsL = (props) => (
    <div>
    <ul className='Left'>
        <NavigationItem link='/download' > دانلود اپلیکیشن</NavigationItem>
        <NavigationItem link='/login'>ثبت نام / ورود</NavigationItem>
        <NavigationItem  activeJoon  link='/login'> کسب درامد   </NavigationItem>
    </ul>
    <img src={Badge} alt='' className='Badge' />
   
    </div>


);
export default navigationItemsL;