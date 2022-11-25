import React from 'react'
 import {ProductSectionStyled} from './ProductsSectionStyled'
import {  ProductButtonStyled } from '../ButtonStyled'
import {useNavigate} from 'react-router-dom'
function ProductsSection() {
  const navigate = useNavigate()
  return (
    <ProductSectionStyled>
        <section className='section1'>
            <div className='section1-wrapper'>
              <div className='section-container'>
                <div className='product'>
                  <div>
                    <h1>ZX9 </h1>
                    <h1>speaker</h1>
                  </div>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <ProductButtonStyled onClick={()=>navigate('/product/speakers/zx9-speaker')}> See product</ProductButtonStyled>
              </div>
              </div>
                
            </div>
        </section>
        <section className="product2">
                <h1>ZX7 speaker </h1>
                <ProductButtonStyled onClick={()=>navigate('/product/speakers/zx7-speaker')}> See product</ProductButtonStyled>
        </section>
        <section class="product3">
          <div className="product3-wrapper">
            <div>
              <h1>YX1 earphones </h1>
              <ProductButtonStyled onClick={()=>navigate('/product/speakers/yx1-earphones')}> See product</ProductButtonStyled>
            </div>
          </div>
        </section>
    </ProductSectionStyled>
  ) 
}

export default ProductsSection