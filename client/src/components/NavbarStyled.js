import styled from "styled-components";

export const NavbarStyled = styled.header`
 display:grid;
 grid-template-columns: max-content auto max-content;
 align-items: center;
 border-bottom:1px solid rgba(255,255,255,0.1);
 height: 68px;
 padding-left: 1rem;
 padding-right: 1rem;

 nav{
    display: flex;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: #FFFFFF;
 };
 nav ul{
    display: none;
    position: absolute;
    top: 67px;
    flex-direction: column;
    gap:10px;
    z-index: 3;
 };
 nav ul a{
   /* border-bottom:1px solid rgba(255,255,255,0.1); */
 }
 .logo{
    justify-self: center;
 };
 nav a.active{
    color: #D87D4A;
 };
 @media (min-width: 768px) {
    .logo{
        justify-self: start;
        margin-left: 4rem;
    };
  };
  @media (min-width: 1144px) {
    nav{
        justify-self: center;
    }
    nav ul{
        display: flex;
        flex-direction: row;
        gap:3rem;
        position: unset;
    };
    #dropdownButton{
        display: none;
    }
    .logo{
       order:-1;
       margin-left: 0;
    }
  }
   
` 