import React from 'react'
import { ProductSectionStyled } from './ProductSectionStlyed';
import Button from '../Button';
function ProductSection({productInCategory,style,categoryName}) {
  const { slug, product_id, name,description,category_mobile_image_url,category_tablet_image_url, category_desktop_image_url} = productInCategory;
  const productImage = [category_mobile_image_url,category_tablet_image_url, category_desktop_image_url]
  return (
    /* index is used to style element based on odd or even number */
    <ProductSectionStyled productImage={productImage} index={style} >
      <div className='product-wrapper'>
        <div>
          {productInCategory.new  && <h2>new product</h2>}
          <h1>{name}</h1>
          <p>{description}</p>
          <Button categoryName={categoryName} product_id={slug} product={product_id} />
        </div>
      </div>
    </ProductSectionStyled>
  )
}
 
export default ProductSection