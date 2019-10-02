import React from 'react';
import './Sc.css';
import StarRatings from 'react-star-ratings';
const Cart = (props) => {
    const obj = props.image


    const pic = (
        <div>
            <img src={require('../../../../assets/profileimg/reza.png')} alt="" className='Imoji' />
            {/* <img src= {require('../../../../assets/Imojies/imoji-1.png')}  alt="" className='Imoji' /> */}
        </div>

    )
    const star = (
        <StarRatings
            rating={4}
            starDimension="11px"
            starSpacing="1px" npm start
            starRatedColor=" #F5C51C"
        />
    )



    console.log(obj);
    return (

        <div className='Cart'>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' , alignContent: 'flex-end', position:'relative',left:15}}>
                    <div className='Name'>{props.name}</div>
                    {star}
                    <div className='Hour'>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft :15}}>
                            <p style={{ fontSize: 12, color: ' #85C02B' , marginBottom:10,}}>
                                28 کار انجام شده
                            </p>
                            <svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.15 9.35997C8.3125 9.51997 8.55625 9.59997 8.71875 9.59997C8.88125 9.59997 9.125 9.51997 9.2875 9.35997C9.6125 9.03997 9.6125 8.55996 9.2875 8.23996L8.3125 7.27996V5.19994C8.3125 4.71994 7.9875 4.39994 7.5 4.39994C7.0125 4.39994 6.6875 4.71994 6.6875 5.19994V7.59996C6.6875 7.83996 6.76875 7.99996 6.93125 8.15996L8.15 9.35997Z" fill="#85C02B" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.15 9.35997C8.3125 9.51997 8.55625 9.59997 8.71875 9.59997C8.88125 9.59997 9.125 9.51997 9.2875 9.35997C9.6125 9.03997 9.6125 8.55996 9.2875 8.23996L8.3125 7.27996V5.19994C8.3125 4.71994 7.9875 4.39994 7.5 4.39994C7.0125 4.39994 6.6875 4.71994 6.6875 5.19994V7.59996C6.6875 7.83996 6.76875 7.99996 6.93125 8.15996L8.15 9.35997Z" fill="#85C02B" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.59996C14 5.75995 13.1875 4.15993 11.9688 2.95993C11.9688 2.95993 10.5465 1 7.4996 1C4.45273 1 3.03125 2.95993 3.03125 2.95993C3.03125 2.95993 1 5.75995 1 7.59996C1 9.43997 1.8125 11.12 3.03125 12.24L4.7375 13.44C5.55 13.84 6.44375 14 7.41875 14C8.39375 14 9.2875 13.76 10.1 13.44L11.8875 12.32C13.1875 11.12 14 9.43997 14 7.59996ZM7.5 2.79993C4.81875 2.79993 2.625 4.95994 2.625 7.59996C2.625 10.24 4.81875 12.4 7.5 12.4C8.71875 12.4 9.85625 12 10.6687 11.28C11.725 10.4 12.375 9.03997 12.375 7.59996C12.375 4.95994 10.1813 2.79993 7.5 2.79993Z" fill="#85C02B" />
                            </svg>



                        </div>
                    </div>
                </div>
                {pic}
            </div>

            <div className='Content'>{props.content}</div>

        </div>
    )

}
export default Cart;