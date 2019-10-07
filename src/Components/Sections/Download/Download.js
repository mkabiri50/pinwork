import React from 'react';
import Buttom from '../../Ui/Button/Button';
import DlImage from '../../../assets/image/download.png';
import './Download.scss';
const Download = () => {
  return (
    <div className='DlContainer'>
      <img src={DlImage} alt='image' />
     <div className='mobile-App-container'>
     
          <p style={{ fontSize: 24, textAlign: 'right' }}>
             پین ورک را دانلود کنید
          </p>
      
             <p style={{ fontSize: 16, textAlign: 'right' }}>
               تیییتی ححثبننب بنبنب بکه لازم است برای شرایت مئرد نیاز و کاربرد های متنوع با هدف بهبود شرایط کاربردی تیتتیینی نننیییمی نینیی یدمیتین ی یدخی یئ نینینینن ننیننیمم ننینینین ننینیین
           </p>
         
            <div style={{ textAlign: 'right' }}>
             <Buttom btnType='apple'> ios دانلود نسخه </Buttom>
            <Buttom btnType='android'> android دانلود نسخه</Buttom>

         </div>
    </div>
   </div>
  )
}
export default Download;