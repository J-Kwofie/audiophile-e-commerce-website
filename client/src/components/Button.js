
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from './ButtonStyled'

export default function Button({categoryName,product_id}) {
    const navigate = useNavigate()
  return (
    <StyledButton onClick={()=> navigate(`/product/${categoryName}/${product_id}`)}>see product</StyledButton>
  )
}
