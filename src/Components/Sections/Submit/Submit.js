import React from 'react';
import './Submit.scss';
const Submit = () => {
    return (
        <div className='SubmitContainer'>
            <p style={{ fontSize: 24, lineHeight: ' 200%' }}> مراحل ثبت نام در پین ورک ساده است</p>
            <p>
                که لازم است برای شرایت مئرد نیاز و کاربرد های متنوع با هدف بهبود شرایط کاربردی تیتتیینی نننیییمی ننینینینن ننیننیمم ننینینین ننینیین
             </p>
            <div className='SubmitDoc' dir="rtl" >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>1-تحویل مدارک</p>
                    <ul >
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
        </div>
    )
}
export default Submit