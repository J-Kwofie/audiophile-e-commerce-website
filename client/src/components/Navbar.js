import React, {useRef} from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import cart from '../assets/shared/desktop/icon-cart.svg'
import hamburger from '../assets/shared/tablet/icon-hamburger.svg'
import {NavbarStyled} from './NavbarStyled'
import {NavLink} from 'react-router-dom'
function Navbar() {
  const dropdownMenu = useRef()
  function dropdownHandler(){
   if(dropdownMenu.current.style.display === 'flex'){
         dropdownMenu.current.style.display = 'none';
    } else{
         dropdownMenu.current.style.display = 'flex';
    } 
  }
  return (
    <div className='headerWrapper' >
    <NavbarStyled>
      <>
      <nav>
          <img  src={hamburger} alt="hamburger" id="dropdownButton" onClick={dropdownHandler}/>
          <ul ref={dropdownMenu}>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='product/headphones'>Headphones</NavLink>
            <NavLink to='product/speakers' >Speakers</NavLink>
            <NavLink to='product/earphones'>Earphones</NavLink>
          </ul>
        </nav>
      <img src={logo} alt='logo' className='logo' />
      <img src={cart} alt='cart' />
      </>
    </NavbarStyled>
    </div>
    )
}

export default Navbar