import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react';
import {useParams} from 'react-router-dom'
import {ProductStyled} from '../components/ProductStyledDetails'
import {StyledButton} from '../components/ButtonStyled'
import {AddButton,SubButton,NumberButton} from '../components/ButtonStyledProduct'
import {GalleryStyled} from '../components/GalleryStyled';
import ProductSection from '../components/products/ProductSection'; 
import CategorySection from '../components/CategorySection'
import BackButton from '../components/BackButton'
import Cart from '../components/cart/Cart'

function ProductDetails() {
  const params = useParams()
	const category  = params.category;
  const product_id = params.product_id;
  const [productDetails, setProductDetails] = useState([])
  const [numberOfProductAddedToCart, setNumberOfProductAddedToCart] = useState(1)
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart]= useState(false)

  const f = useRef(1)
  useEffect(()=>{
    axios.get(`http://localhost:8081/api/vi/product/${category}/${product_id}`)
    .then((res)=>{setProductDetails(res.data); console.log( res.data)})
    .catch((err)=>console.log(err))
    setNumberOfProductAddedToCart(1)
  },[category,product_id])
  const updateCartList = (cartLists)=>{
    setCart(cartLists)
  }
  const subtractionHandler = (e)=>{
    if(numberOfProductAddedToCart>1){
      setNumberOfProductAddedToCart((currentState)=>--currentState)


    }
  }
  const additionHandler = (e)=>{
      setNumberOfProductAddedToCart((currentState)=>++currentState)
      f.current=numberOfProductAddedToCart+1
  }
  const addToCartHandler = (e)=>{

    let pro = {...productDetails[0],numberOfProductAddedToCart:numberOfProductAddedToCart}
    console.log(numberOfProductAddedToCart)

    //check if a  product is already added to cart
    let carts = cart.findIndex(item => item.slug === productDetails[0].slug);
    if(carts===-1){
      setCart([...cart, pro])
    }else{
      console.log(carts)
      const items = [...cart]
      items[carts] = pro
      setCart([...items])
    }
    setDisplayCart(true)

  }
  return (
    //check if product details has loaded
    productDetails.length > 0 && 
   
    <ProductStyled by_image={[productDetails[0].mobile_image_url,productDetails[0].tablet_image_url,productDetails[0].desktop_image_url]}>
     <BackButton />
      <div className='product-details'>
        <section>
        {productDetails[0].new === true &&  <h4>new product</h4>}
          <h1>{productDetails[0].name}</h1>
          <p>{productDetails[0].description}</p>
          <strong>{`$  ${productDetails[0].price}`}</strong>
          <div className="cart">
            <div className="cartSubAdd" >
              <SubButton onClick={subtractionHandler}>-</SubButton>
              <NumberButton>{numberOfProductAddedToCart}</NumberButton>
              <AddButton onClick={additionHandler}>+</AddButton>
            </div>
            <StyledButton onClick={addToCartHandler}>Add to Cart {numberOfProductAddedToCart}</StyledButton>
          </div>
        </section>
      </div>
      <div className='feature-in-box'>
      <section className='features'>
          <h2>features</h2>
          <p>{productDetails[0].feature.split('\\n\\n')[0]}</p>
          <p>{productDetails[0].feature.split('\\n\\n')[1]}</p>

      </section>
      <section className='other-items'>
        <h2>in the box</h2>
        <ul>
         {
          productDetails[1].map((feature,index)=>{
           return ( <li key={index}><span>{`${feature.quantity}x`}</span> <span>{feature.item_name}</span></li>)
          })
         }
        </ul>
      </section>
      </div>
      <GalleryStyled gallery={productDetails[2]}>
         {productDetails[2].map((item,index)=>{
          return <div key={index} className={`gallery${index}`}></div>
         })
        }
      </GalleryStyled>
      <section className='other-product-items'>
        <h2>you may also like</h2>

      <div className='otherItrms'>
        {
          productDetails[3].map((productInCategory,index)=><ProductSection categoryName={category} key={index} style={index} productInCategory={productInCategory}/>)
        }
      </div>
      </section>

      <section className='category'>
        <CategorySection />
      </section>
       {displayCart === true && <Cart className="carti" updateCartList={updateCartList} cartList={cart} addAndSubButton={{subtractionHandler,additionHandler}}  addToCartHandler={addToCartHandler}  numberOfProduct={f.current}/>}
    </ProductStyled>
  )
}

export default ProductDetails