import styled from "styled-components";

export const StyledCart = styled.section`
    max-width: 377px;
    box-sizing: border-box;
    width: 90%;
    display: flex;
    position: absolute;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    gap: 30px;
    padding: 30px;
    .cart-header{
        display: flex;
        justify-content: space-between;
    }
    .number-of-cart{
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1.28571px;
        text-transform: uppercase;
        color: #000000;
    }
    .remove-button{
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;

        text-decoration-line: underline;

        color: #000000;

        mix-blend-mode: normal;
        opacity: 0.5;   
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
     
     li{
        width: 100%;
        justify-content: space-between;
        margin-bottom: 20px;
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
    .cart-total-text-value-wrapper{
        display: flex;
        justify-content: space-between;
    }
    .cart-total-text{
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;

        color: #000000;

        mix-blend-mode: normal;
        opacity: 0.5;
    }
    .cart-total-value{
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        /* identical to box height */

        text-align: center;
        text-transform: uppercase;

        color: #000000;

    }
    .checkout{
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        width: 100%;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;

        color: #FFFFFF;
    }
    @media (min-width: 766px){
        width: 60%;
        align-self: flex-end;
        margin-right: 5%;
        margin-top: 30px;
    }
`