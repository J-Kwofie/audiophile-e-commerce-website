import React, { useState,useEffect } from 'react'
import CheckoutForm from '../components/CheckoutForm'
import Cartsummary from '../components/Cartsummary'
import {CheckoutStyled} from '../components/CheckoutStyled'
import BackButton from '../components/BackButton'
export default function Checkout() {

	const [cartLists, setCartLists] = useState([]);

	useEffect(() => {
	  const cartLists = JSON.parse(localStorage.getItem('cartList'));
	  if (cartLists) {
		setCartLists(cartLists);
	  }
	}, []);
	return (
		cartLists.length > 0 &&
		<CheckoutStyled>
			<BackButton />
			<CheckoutForm />
			<Cartsummary cartList={cartLists}/>
		</CheckoutStyled>
	)
}