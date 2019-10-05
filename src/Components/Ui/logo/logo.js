import React from 'react';
import pnLogo from '../../../assets/logo/Logo.png';
import './Logo.scss';
const logo = (props) =>(
    <div className='Pinwork-Logo'>
        <img className='backImage' src ={pnLogo} alt = 'MyBurger' />
    </div>
)
export default logo