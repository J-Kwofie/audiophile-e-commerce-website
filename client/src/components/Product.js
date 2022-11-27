import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {ProductStyled} from './ProductStyledDetails'
import {StyledButton} from '../ButtonStyled'
import {AddButton,SubButton,NumberButton} from './ButtonStyled'
import {GalleryStyled} from './GalleryStyled';
import CategorySection from '../CategorySection'

function ProductDetails() {
  const params = useParams()
	const category  = params.category;
  const product_id = params.product_id;
  const [productDetails, setProductDetails] = useState([])
  const [numberOfProductAddedToCart, setNumberOfProductAddedToCart] = useState(1)
  useEffect(()=>{
    axios.get(`https://audio-ph.onrender.com/api/vi/product/${category}/${product_id}`)
    .then((res)=>{setProductDetails(res.data); console.log( res.data)})
    .catch((err)=>console.log(err))
  },[category,product_id])
  const subtractionHandler = (e)=>{
    if(numberOfProductAddedToCart>1){
      setNumberOfProductAddedToCart((currentState)=>--currentState)
    }
  }
  const additionHandler = (e)=>{
      setNumberOfProductAddedToCart((currentState)=>++currentState)
    
  }
  return (
    //check if product details has loaded
    productDetails.length > 0 && 
   
    <ProductStyled by_image={[productDetails[0].mobile_image_url,productDetails[0].tablet_image_url,productDetails[0].desktop_image_url]}>
      <h3>Go Back</h3>
      <div className='product-details'>
        <section>
          <h1>{productDetails[0].name}</h1>
          <p>{productDetails[0].description}</p>
          <strong>{`$  ${productDetails[0].price}`}</strong>
          <div className="cart">
            <div className="cartSubAdd" >
              <SubButton onClick={subtractionHandler}>-</SubButton>
              <NumberButton>{numberOfProductAddedToCart}</NumberButton>
              <AddButton onClick={additionHandler}>+</AddButton>
            </div>
            <StyledButton>Add to Cart</StyledButton>
          </div>
        </section>
      </div>
      <section className='features'>
          <h2>features</h2>
          <p>{productDetails[0].feature.split('\\n\\n')[0]}</p>
          <p>{productDetails[0].feature.split('\\n\\n')[1]}</p>

      </section>
      <section>
        <h2>in the box</h2>
        <ul>
         {
          productDetails[1].map((feature,index)=>{
           return ( <li key={index}><span>{`${feature.quantity}x`}</span> <span>{feature.item_name}</span></li>)
          })
         }
        </ul>
      </section>
      <GalleryStyled gallery={productDetails[2]}>
         {productDetails[2].map((item,index)=>{
          return <div key={index} className={`gallery${index}`}></div>
         })
        }
      </GalleryStyled>
      <section className='otherItrms'>
        <CategorySection />
      </section>
    </ProductStyled>
  )
}

export default ProductDetails