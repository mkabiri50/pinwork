import React from 'react';
import Form from './Components/Form/Form';
import Image from './assets/image/Webp.png'
import ToolBar from './Components/NavBar/ToolBar/ToolBar';
import Carts from './Components/CartPostal/Carts/Carts';
import Scs from './Components/StuffCarts/Scs/Scs';
import Buttom from './Components/Ui/Button/Button';
import DlImage from './assets/image/download.png'


import './App.css';

function App() {
  return (

    <div className="App">
      <div style={{ marginTop: 60, fontSize: 32, left: 176, top: 144, position: 'absolute', left: 176, top: 44, fontWeight: 'bold', }}>
        <p style={{ fontSize: 32, fontWeight: 'bold' }}>
          از تخصص و مهادت خود کسب درامد کنید
          </p>
        <p style={{ fontSize: 18, textAlign: 'right' }}>
          با امکان کسب دامد بیش از سی میلیون ریال در ماه
          </p>

      </div>


      <ToolBar />

      <div style={{ marginBottom: 50, height: '100%' }}>
        <img className='BackImage' src={Image} alt='image' />

        <Form />
      </div>

      <div style={{
        position: 'absolute',
        width: '80%',
        textAlign: 'center',
        background: " #E5E5E5",
        top: 695,
        height: '500',
        width: '100%',
        zIndex: -1
      }}>
        <p style={{ fontSize: 24, marginTop: 120 }}>
          پین ورک چیست و در چه زمینه ای کار میکند؟
        </p>
        <p style={{ fontSize: 16, paddingLeft: '10%', paddingRight: '10%' }}>
          شده از مشتریان خود نظرسنجی میکند واز این طریق کوشش می کند تاهموتره بهترین خدمات کارواش و نظافت خود را برای مشتری خود به ارمغان بیاورد در زمینه صرفه جویی در مصرف آب بهینه شده اند و نسبت به کارواش سنتی آب مصرفی کمی نیاز دارند همچنین پین ورک پس از پایان هر سفارش وخدمات ارایه حضور در محلجالب است بدانید سرویس کارواش آنلاین
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>

        </div >
        <ui style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p>
              کارواش آنلاین در زمینه صرفه جویی در مصرف آب بهینه
            </p>
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683418 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#85C02B" />
            </svg>

          </li>
          <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p>
              کارواش آنلاین در زمینه صرفه جویی در مصرف آب بهینه
            </p>
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683418 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#85C02B" />
            </svg>

          </li>
          <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p>
              کارواش آنلاین در زمینه صرفه جویی در مصرف آب بهینه
            </p>
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683418 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#85C02B" />
            </svg>

          </li>
          <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p>
              کارواش آنلاین در زمینه صرفه جویی در مصرف آب بهینه
            </p>
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683418 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#85C02B" />
            </svg>

          </li>
        </ui>
      </div>
      <div style={{ backgroundColor: 'white', width: '100%', height: '500', position: 'relative', top: 1120, textAlign: 'center', margin: 25 }}>
        <p style={{ fontSize: 24, lineHeight: ' 200%' }}>
          چرا کار در پین ورک مناسب شماست؟
       </p>
        <p>
          تیییتی ححثبننب بنبنب بکه لازم است برای شرایت مئرد نیاز و کاربرد های متنوع با هدف بهبود شرایط کاربردی تیتتیینی نننیییمی ننینینینن ننیننیمم ننینینین ننینیین
       </p>
        <div Style={{ margin: 100 }}>
          <Carts />
        </div>


      </div>
      <div style={{ background: " #E5E5E5", width: '100%', height: '600', position: 'relative', top: 1120, textAlign: 'center' }}>
        <p style={{ fontSize: 24, lineHeight: ' 200%' }}>
          مراحل ثبت نام در پین ورک ساده است
       </p>
        <p>
          که لازم است برای شرایت مئرد نیاز و کاربرد های متنوع با هدف بهبود شرایط کاربردی تیتتیینی نننیییمی ننینینینن ننیننیمم ننینینین ننینیین
       </p>
        <div dir="rtl" style={{ display: 'flex', flexDirection: 'row ', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p>1-تحویل مدارک</p>
            <ul style={{ listStyleType: ' disc' }}>
              <li>کپی شناسنامه</li>
              <li>عکس</li>
              <li>(کارت مهارت (به جز برتی متقاضیان خدمات نظافتی</li>
              <li>کپی اجاره نامه یا سند خانه</li>
              <li>قبض آب برق گاز یا تلفن</li>
              <li>شماره حساب شبا به اسم خودتان</li>
              <li>استعلام سو پیشینه</li>
            </ul>
          </div>
          <div>
            <p>2-حضور در کلاس های اموزشی</p>
            <p>متقاضی خدمات نظافتی فقط روز های زوج </p>
          </div>

        </div>

        <div style={{ backgroundColor: 'white', width: '100%', height: '500', position: 'relative', top: 150, textAlign: 'center', }}>
          <p style={{ fontSize: 24, lineHeight: ' 200%' }}>
            چرا کار در پین ورک مناسب شماست؟
       </p>
          <p>
            تیییتی ححثبننب بنبنب بکه لازم است برای شرایت مئرد نیاز و کاربرد های متنوع با هدف بهبود شرایط کاربردی تیتتیینی نننیییمی ننینینینن ننیننیمم ننینینین ننینیین
       </p>
          <div Style={{ margin: 100 }}>
            <Scs />
          </div>
        </div>


        <div style={{ckground: '#E5E5E5', width: '100%', height: '500', position: 'relative', top: 150,  }}>
        <div style={{  display: 'flex', flexDirection:'row',justifyContent:'center'}}>
        <img  src={DlImage} alt='image' />
          <div style={{ display: 'flex', flexDirection: 'column',height:'100%', width:'40%',paddingTop:100 ,paddingRight:100 }}>
           <div>
              <p style={{ fontSize: 24, lineHeight: ' 200%', }}>
                پین ورک را دانلود کنید
             </p>
              <div >
                <p style={{ fontSize: 16, lineHeight: ' 200%', }}>
                  تیییتی ححثبننب بنبنب بکه لازم است برای شرایت مئرد نیاز و کاربرد های متنوع با هدف بهبود شرایط کاربردی تیتتیینی نننیییمی ننینینینن ننیننیمم ننینینین ننینیین
             </p>
              </div>
          <div>
            
          </div>
              <Buttom btnType='apple'> ios دانلود نسخه  </Buttom>
              <Buttom btnType='android'> ios دانلود نسخه  </Buttom>
            </div>

          </div>
       
        </div>
        <div>
           
            </div>

        </div>




      </div>

    </div>


  );
}

export default App;
