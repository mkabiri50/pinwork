import React from 'react';
import Carts from '../../CartPostal/Carts/Carts';
import './Why.css';
const Why=()=>{
    return(
        <div className='WhyContainer'>
        <p style={{ fontSize:24, lineHeight: ' 200%',fontWeight:'bold',}}>
          چرا کار در پین ورک مناسب شماست؟
       </p>
        <p style={{ fontSize: 16, marginLeft:200,marginRight:200, }}>
اگر به دنبال کسب درآمد و دریافت کار در تخصص خود هستید، بدون نیاز به سرمایه اولیه و به دنبال شناخته شدن هستید، پین ورک به همه ی خواسته های شما پاسخ داده است و یک پل ارتباطی مناسب میان مشتری و متخصص فراهم کرده است. که می توانید سفارش در ضمینه تخصص خود در زمان و مکان دلخواه خود را دریافت کنید. به مشتری های خود قیمت بدهید و آن ها رو مشتری وفادار به خود بکنید. زمان های خالی خود را میتوانید پر کنید و اگر تازه کار هستید، یک شروع خوب را تجربه کنید.
       </p>
        <div >
          <Carts />
        </div>


      </div>
    )
}
export default Why;