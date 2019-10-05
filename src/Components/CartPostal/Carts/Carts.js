import React, { Component } from 'react';
import './Carts.scss'
import Cart from './Cart/Cart'
import data from '../../../assets/json/data.json'

class Carts extends Component{
    render(){

      data.map((item, i) => {
       return(item.id = i + 1)
      });
        const cartData =(
            data.map(p => (
                <Cart 
                key={p.id}
                title={p.title}           
                image={p.image}
                content={p.content}  />
           
         
        )));  
        return(
            <div className='Cartss'>  
                 {cartData}
            </div>     
        )
    }
}
export default Carts;