import React from 'react'
import FooterSection1 from './FooterSection1'
import FooterSection2 from './FooterSection2'
import { FooterStyled } from './FootStyled'
export default function Footer() {
  return (
    <FooterStyled>
        <FooterSection1 />
        <FooterSection2 />
    </FooterStyled>
  )
}
