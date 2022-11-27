import styled from "styled-components";

export const ThankYouCardStyled = styled.section`
    
position: absolute !important; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  max-width: 100% !important;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 5; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  margin: 0;
  padding:0;
  display: flex;
  align-items: center;
  justify-content: center;
  .thankYou{
    width: 90%;
    max-width: 540px;
    background: #FFFFFF; 
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left:5%;
    padding-top: 60px;
    padding-bottom: 60px;
    gap: 30px;
  }
  .thankYou .confirm{
  }
  .thankYou .other-Items{
        width: 80%;
        text-align: center;
        padding:10px 0;
        border-top: 1px solid rgba(0,0,0,0.2);
        margin: 0 10%;
  }
   .mark{
    width: 64px;
    height: 64px;
    background-color: #D87D4A;
    border-radius:32px;
    display: flex;
    align-items: center;
    justify-content: center;

   }
   h1{
    width: 263px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.857143px;
    text-transform: uppercase;

    color: #000000;
   }
   p{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */
    color: #000000;

    mix-blend-mode: normal;
    opacity: 0.5;
   }
   li{
        width: 80%;
        justify-content: space-between;
        margin: 20px 10%;
     }
     .cart-image{
        width:64px;
        height:64px;
     }
     .cart-name-price .cart-name{
        font-weight: 700;
        font-size: 15px;
        line-height: 25px;
        color: #000000
        
     }
     .cart-price{
        font-weight: 700;
        font-size: 14px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
     }
     .cart-name-price{
        display: flex;
        flex-direction: column;
    }
    .cart-name-price-image{
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    .cartSubAdd{
        width: 92px;
        height: 32px;
    }
    .card{
        width: 90%;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: #F1F1F1;
    }
    .total{
        background: #000000;
        border-radius: 0px 0px 8px 8px;
        width: 100%;
        padding: 30px 0;

    }
    .total h2{
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        /* identical to box height, or 167% */
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;
        margin: 0 30px 10px;
    }
    .total p{
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        /* identical to box height */
        text-transform: uppercase;

        color: #FFFFFF;
        opacity: 1;
        margin: 0 30px ;

    
    }
    .backHome{
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        width: 90%;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        border-radius: 0;
        color: #FFFFFF;
    }
    @media (min-width: 766px){
        .card{
            display:grid;
            grid-template-columns: auto max-content;
        }
        .total{
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;
            border-radius: 0;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }
        .thankYou{
            width:80%;
        }
    }
   
`