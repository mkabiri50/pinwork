import React from 'react';
import './Cart.scss';

const Cart = (props) => {
    const obj = props.image


    const pic = (
        <div>
            <img src= {require('../../../../assets/Imojies/'+obj)} alt="" className='Imoji' />
        </div>

    )



    console.log(obj);
    return (

        <div className='Cart'>
            {pic}
                    
            <div className='Title'>{props.title}</div>
            <div className= 'Content'>{props.content}</div>

        </div>
    )

}
export default Cart;