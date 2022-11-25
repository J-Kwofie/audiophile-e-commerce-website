import React, {useState, useEffect} from 'react'
import { StyledCart } from './StyledCart'
import {AddButton,SubButton,NumberButton} from '../ButtonStyledProduct'
import { StyledButton } from '../ButtonStyled';
import { useNavigate } from 'react-router';
export default function Cart({cartList,addAndSubButton,addToCartHandler,numberOfProduct,updateCartList}) {
    const [total, setTotal] = useState(0);
    const navigate =useNavigate()
    useEffect(()=>{
        let sum = 0;
        cartList.forEach((item)=>{
            sum+=item.price*item.numberOfProductAddedToCart;
            return sum;
        })
        setTotal(sum)
    },[cartList,updateCartList])
    const subtractionHandler =(e)=>{
      const product_id = e.target.id
      //check if a  product is already added to cart
    let carts = cartList.findIndex(item => item.slug ===product_id);
    if(carts===-1){
      updateCartList(cartList)
    }else{
      console.log(carts)
      const items = [...cartList]
      if(items[carts].numberOfProductAddedToCart>1){
        items[carts].numberOfProductAddedToCart =  items[carts].numberOfProductAddedToCart-1;
        updateCartList([...items])
      }
      
    }
    

    }
   
    const additionHandler =(e)=>{
      const product_id = e.target.id
      //check if a  product is already added to cart
    let carts = cartList.findIndex(item => item.slug ===product_id);
    if(carts===-1){
      updateCartList(cartList)
    }else{
      console.log(carts)
      const items = [...cartList]
      items[carts].numberOfProductAddedToCart =  items[carts].numberOfProductAddedToCart+1;
      updateCartList([...items])
    }
    }
    const removeCartHandler =(e)=>{
      updateCartList([])

    }
    const handleCheckout = (e)=>{
       localStorage.setItem('cartList', JSON.stringify(cartList));
       navigate('/checkout')
      }
  return (
    <StyledCart className='g'>
      <div className='cart-header'>
        <h1 className='number-of-cart'>{`Cart (${cartList.length})`} </h1>
        <div className='remove-button' onClick={removeCartHandler}>Remove all</div>
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
                        <SubButton id={item.slug} onClick={subtractionHandler}>-</SubButton>
                        <NumberButton>{item.numberOfProductAddedToCart}</NumberButton>
                        <AddButton id={item.slug} onClick={additionHandler }>+</AddButton>                                                                  
                    </div>
                </li>
                )
                
            })}
        </ul>
      <div className='cart-total-text-value-wrapper'>
        <span className='cart-total-text'>TOTAL</span>
        <span className='cart-total-value'>{`${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',  }).format(total)}`}</span>
      </div>
      <StyledButton className='checkout' 
      onClick={handleCheckout}>checkout </StyledButton>

    </StyledCart>
  )
}
