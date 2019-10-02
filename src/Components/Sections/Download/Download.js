import React from 'react';
import Buttom from '../../Ui/Button/Button';
import DlImage from '../../../assets/image/download.png';
const Download =()=>{
    return(
        <div style={{ backgroundColor: '#E5E5E5', width: '100%', height: 500, position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding:50,paddingTop:30 }}>
          <img src={DlImage} alt='image' />
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '40%', alignItems:'flex-ebd', }}>
            <div>
              <p style={{ fontSize: 24,textAlign:'right'  }}>
                پین ورک را دانلود کنید
           </p>
              <div >
                <p style={{ fontSize: 16,textAlign:'right' }}>
                  تیییتی ححثبننب بنبنب بکه لازم است برای شرایت مئرد نیاز و کاربرد های متنوع با هدف بهبود شرایط کاربردی تیتتیینی نننیییمی نینیی یدمیتین ی یدخی یئ نینینینن ننیننیمم ننینینین ننینیین
           </p>
              </div>
              
        
              <div style={{justifySelf:'flex-start'}}> 
              <Buttom btnType='apple'> ios دانلود نسخه </Buttom>
              <Buttom btnType='android'> android دانلود نسخه</Buttom>
              </div>
              
            </div>
         
          </div>
  
        </div>
  
        <div>

        </div>
    
      </div>
    )
}
export default Download;