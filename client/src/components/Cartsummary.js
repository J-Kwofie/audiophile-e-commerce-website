import React, {useEffect, useState} from 'react'
 import { StyledCart } from './cart/StyledCart';
import { NumberButton } from './ButtonStyledProduct';
import { StyledButton } from './ButtonStyled';
 export default function Cartsummary({cartList}) {
    const [total, setTotal] = useState(0);
    const [shipping , setShipping] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0)
    const [vat, setVat] = useState(0)
    useEffect(()=>{
        let sum = 0;
        cartList.forEach((item)=>{
            sum+=item.price*item.numberOfProductAddedToCart;
            return sum;
        })
        setTotal(sum)
        setShipping(50)
        setVat((20/100)*sum)
        setGrandTotal(total+shipping+vat)
    },[cartList,total,shipping,grandTotal,vat])
  return (
    <StyledCart className='cart-summary'>
      <div className='cart-header'>
        <h1 className='number-of-cart'>{`SUMMARY`} </h1>
      </div>
        <ul>
            {cartList.map((item,index)=>{
                return(
                <li key={index}>
                    <div className='cart-name-price-image'>
                        <img className='cart-image' src={`../../assets/cart/image-${item.slug}.jpg`} alt='cart' />
                        <div className='cart-name-price'>
                            <span className='cart-name'>{item.name.replace(item.name.split(' ').pop(), '')}</span>
                            <span>{`$  ${item.price}`}</span>
                        </div>
                    </div>
                    <div className="cartSubAdd" >
                        <NumberButton>{`X${item.numberOfProductAddedToCart}`}</NumberButton>
                    </div>
                </li>
                )
                
            })}
        </ul>
      <div className='cart-total-text-value-wrapper'>
        <span className='cart-total-text'>TOTAL</span>
        <span className='cart-total-value'>{`${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',  }).format(total)}`}</span>
      </div>
      <div className='cart-total-text-value-wrapper'>
        <span className='cart-total-text'>SHIPPING</span>
        <span className='cart-total-value'>{`${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',  }).format(shipping)}`}</span>
      </div>
      <div className='cart-total-text-value-wrapper'>
        <span className='cart-total-text'>VAT (INCLUDED)</span>
        <span className='cart-total-value'>{`${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',  }).format(vat)}`}</span>
      </div>
      <div className='cart-total-text-value-wrapper'>
        <span className='cart-total-text'>GRAND TOTAL</span>
        <span className='cart-grand-total-value'>{`${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',  }).format(grandTotal)}`}</span>
      </div>
      <StyledButton className='checkout'  form='checkout' type='submit'>Continue & pay </StyledButton>

    </StyledCart>      
    
  )
}
