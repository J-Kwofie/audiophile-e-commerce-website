import React from 'react'
import { NavLink } from 'react-router-dom'
import { FooterSection2Styled } from './Footersection2Styled'
function FooterSection2() {
  return (
    <FooterSection2Styled>
        <div className='line'></div>
         <nav>
         <img src={require('../../assets/shared/desktop/logo.svg').default} alt='logo' className='logo' />
          <ul>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='headphones'>Headphones</NavLink>
            <NavLink to='speakers' >Speakers</NavLink>
            <NavLink to='earphones'>Earphones</NavLink>
          </ul>
        </nav>
        <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
  and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
  visit our demo facility - we’re open 7 days a week.
        </p>
        <div>
        <p className='copyright'>Copyright 2021. All Rights Reserved</p>
        <ul>
            <li><a href="hf"><img src={require('../../assets/shared/desktop/icon-facebook.svg').default } alt='facebook-icon'/></a></li>
            <li><a href="hf"><img src={require('../../assets/shared/desktop/icon-twitter.svg').default} alt='facebook-icon'/></a></li>
            <li><a href="hf"><img src={require('../../assets/shared/desktop/icon-instagram.svg').default} alt='facebook-icon'/></a></li>
        </ul>
        </div>
        
    </FooterSection2Styled>
  )
}

export default FooterSection2