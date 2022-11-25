import React from 'react'
import { HeaderStyled } from './HeaderStyled'
export default function Header({category}) {
  return (
    <HeaderStyled>
        <h1>{category}</h1>
    </HeaderStyled>
  )
}
