import React, { useState,useEffect } from 'react'
import CheckoutForm from '../components/CheckoutForm'
import Cartsummary from '../components/Cartsummary'
import {CheckoutStyled} from '../components/CheckoutStyled'
import BackButton from '../components/BackButton'
import ThankYouCard from '../components/ThankYouCard'
export default function Checkout() {
	const [total, setTotal] = useState(0);
    const [shipping , setShipping] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0)
    const [vat, setVat] = useState(0)

	const [cartLists, setCartLists] = useState([]);
	const [thankYouCard, setThankYouCart] = useState(false)
	const thankYouHandler = ()=>{
		setThankYouCart(!thankYouCard)
	}
	useEffect(() => {
	  const cartLists = JSON.parse(localStorage.getItem('cartList'));
	  if (cartLists) {
		let sum = 0;
        cartLists.forEach((item)=>{
            sum+=item.price*item.numberOfProductAddedToCart;
            return sum;
        })
        setTotal(sum)
        setShipping(50)
        setVat((20/100)*sum)
        setGrandTotal(total+shipping+vat)
		setCartLists(cartLists);
		
	  }
	  
	}, [total,shipping,grandTotal,vat]);
	return (
		cartLists.length > 0 &&
		<CheckoutStyled>
			<BackButton />
			<CheckoutForm thankYouHandler ={thankYouHandler} />
			<Cartsummary cartList={cartLists} />
			{thankYouCard && <ThankYouCard  grandTotal={grandTotal} cartList={cartLists[0]} lengthOfCartList={cartLists.length}/>}
		</CheckoutStyled>
	)
}