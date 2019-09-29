import React from 'react';
import './Cart.css';
import imoji from '../../../../assets/Imojies/imoji-1.png'
const Cart = (props) => {
    const obj = props.image


    const pic = (
        <div>
            {/* <img src= {require(`../../../../assets/Imojies/${obj}`)}  alt="" className='Imoji' /> */}
            <img src= {require('../../../../assets/Imojies/imoji-1.png')}  alt="" className='Imoji' />
        </div>

    )



    console.log(obj);
    return (

        <div className='Cart'>
            {pic}
            <div className='Title'>شتیبانی و پیگیری دایمی</div>
            <div Content>{props.content}</div>

        </div>
    )

}
export default Cart;