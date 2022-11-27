import React from 'react'
import {ThankYouCardStyled} from './ThankYouCardStyled'
import { NumberButton } from './ButtonStyledProduct'
import { StyledButton } from './ButtonStyled'
import { useNavigate } from 'react-router'
export default function ThankYouCard({cartList,lengthOfCartList,grandTotal}) {
  const navigate = useNavigate()
  return (
    <ThankYouCardStyled className='th'>
      <div className='thankYou'>
      <div className='mark'>
       <img src={require('../assets/mark.png')} alt='mark' />
      </div>
      <h1>THANK YOUFOR YOUR ORDER</h1>
      <p className='confirm'>You will receive an email confirmation shortly.</p>

      {
        <div className='card'>
        <li>
          <div className='cart-name-price-image'>
          <img className='cart-image' src={`../../assets/cart/image-${cartList.slug}.jpg`} alt='cart' />
          <div className='cart-name-price'>
              <span className='cart-name'>{cartList.name.replace(cartList.name.split(' ').pop(), '')}</span>
              <span>{`$  ${cartList.price}`}</span>
          </div>   
          </div>                             
        <div className="cartSubAdd" >
          <NumberButton>{`X${cartList.numberOfProductAddedToCart}`}</NumberButton>
        </div>
        </li>
        <p className='other-Items'> and {lengthOfCartList} other item(s)</p>
        <div className='total'>
          <h2>GRAND TOTAL</h2>
          <p>{`${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',  }).format(grandTotal)}`}</p>
        </div>
        </div>
        
      }
            <StyledButton className='backHome' onClick={()=>navigate('/')} >Back to Home </StyledButton>

      </div>
      
    </ThankYouCardStyled>
  )
}
