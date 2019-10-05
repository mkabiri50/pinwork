import React, { Component } from 'react';
import './Scs.scss';
import Sc from './Sc/Sc';
import data from '../../../assets/json/profileData.json'

class Carts extends Component{
    render(){

      data.map((item, i) => {
       return(item.id = i + 1)
      });
        const cartData =(
            data.map(p => (
                <Sc 
                key={p.id}
                name={p.name} 
                image={p.image}
                content={p.content} 
                rating={p.rating} />
        )));
        
        
    
        return(
            <div className='Cartss'>  
                 {cartData}
            </div>
           
        )
    }
}
export default Carts;