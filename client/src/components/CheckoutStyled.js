import styled from "styled-components";

export const CheckoutStyled = styled.div`
 width: 94%;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 50px;
 padding-left: 3%;
 padding-right: 3%;
background-color:  #F2F2F2;
 section {
    position: unset;
    max-width: 90%;
 }
 li{
    display: flex;
    justify-content: space-between;
 }
 .cartSubAdd{
    display: flex;
    justify-content: flex-end;
 }
 .backbutton {
    font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
        width: 90%;
        margin-top: 60px;
 }
 .backbutton:hover{
   color: #D87D4A;
   opacity: 1;
 }
 form{
    max-width: 90%;
    width: 100%;
 }
footer #section1 section {
    display:none !important;
 }
 footer #section1 div::before {
    display:none !important;
    width: 10%;
 }
 footer #section1 section {
    display:none !important;
 }
 footer #section1 div {
    display:none !important;
 }
 footer #section1 div p {
    display:none !important;
 }
 footer {
    display:none !important;
 }
 #section1{
    display: none;
 }
 .cart-grand-total-value{
   color: #D87D4A;

 }
 .cartSubAdd button{
   background-color: transparent;
   font-weight: 700;
   font-size: 15px;
   line-height: 25px;
   /* identical to box height, or 167% */

   text-align: right;

   color: #000000;

   mix-blend-mode: normal;
   opacity: 0.5;
 }
 @media (min-width: 776px) {
   width: 90%;
   padding-left: 5%;
 padding-right: 5%;
   .cart-summary{
      width: 90%;
   }
 }

 @media (min-width: 1144px) {
   width: 90%;
   display: grid;
   grid-template-columns: 2fr 1fr;
   align-items: top;
   padding-bottom: 150px;

 .backbutton {
    grid-column-start:1;
    grid-column-end: -1;
 }
 .cart-summary{
   
   margin-bottom: auto;
   margin-top: 0;
 }
}
`