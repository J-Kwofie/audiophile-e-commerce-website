import React, {useEffect,useState} from 'react'
import ProductSection from './ProductSection'
import axios  from 'axios'
import {ProductSectionListStyled} from './ProductSectionListStyled'
function ProductSectionList({categoryName}) {
  const [productsInACategory, setProductsInACategory] = useState([])

  useEffect(()=>{
    axios.get(`https://audio-ph.onrender.com/api/vi/product/${categoryName}`)
    .then((res)=>{setProductsInACategory(res.data); console.log(res.data)})
    .catch((err)=>console.log(err))
  },[categoryName])
  return (
    <ProductSectionListStyled>
      {
        productsInACategory.map((productInCategory,index)=><ProductSection categoryName={categoryName} key={index} style={index} productInCategory={productInCategory}/>)
      }
    </ProductSectionListStyled>
  )
}

export default ProductSectionList