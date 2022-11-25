import styled from "styled-components";

export const ProductStyled = styled.section`
    padding: 30px 5%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    h3{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
    }
    .product-details::before{
        content: "";
        background-image: url(${(props)=>`../.${props.by_image[0]}`});
        background-size:contain;
        background-repeat:no-repeat;
        background-position:center;
        min-height:352px;
        height:100%;
        width: 100%;
        display:flex;

    }
    .product-details{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .product-details section{
        width:100%;
        margin-top:30px;
        display:flex;
        flex-direction: column;
        gap:15px;
    }
    section p{
        padding-top:15px;
        margin:0;
    }
    p{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
        max-width:327px;
        text-align:left;
    }
    
    section h2{
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.857143px;
        text-transform: uppercase;

        color: #000000
    }
    .product-details section h1{
        width:100%;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 1px;
        text-transform: uppercase;
        max-width:200px;
    }
    

    .cart{
        display: flex;
        justify-content:center;
        gap:30px;
        align-items:center;
    }
    .cartSubAdd{
        width: 168px ;
        height: 48px;
        background: #F1F1F1;
    }
    ul{
        display:flex;
        flex-direction:column;
        gap:15px;
        width:100%;
        margin-top:30px;
    }
    li {
        display: flex;
        gap:20px;
    }
    li span:nth-child(1){
        font-weight: 700;
        font-size: 15px;
        line-height: 25px;
        color: #D87D4A;

    }
    li span:nth-child(2){
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
    }
    .other-product-items{
        width:90%;
    }
    .other-product-items h2{
        text-align:center;
        margin-top:30px;
        margin-bottom:30px;

    }

    .otherItrms{
        width:100%;
        max-width:100%;
    }
    .otherItrms section{
        margin:60px;
        gap:0;
    }
    .otherItrms h3{
        text-align:center;
    }
   .product-wrapper h2, .product-wrapper p{
        display:none;
   }
   .otherItrms .product-wrapper::before{
    background-size:cover;
    min-height:160px;
    max-width:100%;
    border-radius:10px;
   }
   .otherItrms .product-wrapper{
        max-width:100%;
        margin:0;
    }
    .category h3{
    text-align:center;
   }
   .category section .category-wrapper{
    margin-bottom:60px;
   }
    @media (min-width:400px){
        align-items:center;  

        h3{
            width: 347px;
        }
        section p{
            max-width:347px;
        }
        .features{
          max-width:367px;
         }
    }
    @media (min-width:766px){
        padding : 0;
        margin:0;
        h3{
            align-self:flex-start;
            width:90%;
            margin-left:5%;
            margin-top:30px;
        }
        .product-details::before{
            background-image: url(${(props)=>`../.${props.by_image[1]}`});
            background-size:cover;
            min-height:480px;
            width: 35%;

        }
    .product-details{
        flex-direction: row;
        align-items: center;
        justify-content:space-between;
        width:90%;
    }
    h4{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #D87D4A;

    }
    .product-details section{
        width:auto;
        align-items: flex-start;
    }
    section h2{
        font-weight: 700;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 1.14286px;
    }
    .feature-in-box{
        max-width:90%;
        display:flex;
        flex-direction:column;
        gap: 40px;
    }
    .features{
        max-width:100%;
    }
    .features p{
        width:100%;
        max-width:100%;
    }
    .other-items{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        width:90%;
        gap:15%;
    }
    .other-items ul{
            width:auto;
            margin-top:0;
        }

    .other-product-items{
        width:90%;
    }
    .otherItrms{
        width:100%;
        max-width:100%;
        display:flex;
        justify-content:space-between;
    }
    .otherItrms h3{
        text-align:center;
    }
   .product-wrapper h2, .product-wrapper p{
        display:none;
   }
   .otherItrms .product-wrapper::before{
    background-size:cover;
    min-height:328px;
    height:100%;
    min-width:223px;
   }
   .otherItrms .product-wrapper{
        max-width:100%;
        width:100%;
        display:flex;
        flex-direction:column;
        margin:0;
        gap:20px;
    }
    .product-wrapper h1, .product-wrapper button{
        align-self:center;
    }
    .otherItrms h2{
        flex-grow:1;
        width:100%;
    }
    .otherItrms section{
        margin:0;
    }

    .category{
        width:90%;
    }
   .category section{
    justify-content:space-between;
    width:100%;
   }
  

    }

@media (min-width: 1144px) {
    padding: 30px 5%;
    .product-details::before{
            background-image: url(${(props)=>`../.${props.by_image[2]}`});
            background-size:contain;
            background-position:30% 0%;
            min-height:580px;
            width: 50%;

    }
    .product-details{
        justify-content:center;
        width:100%;
    }
    .product-details section{
        width:30%;
    }
    .feature-in-box{
        flex-direction:row;
        justify-content:space-between;
        gap: 40px;
    }
    .feature-in-box .features{
        width:auto;
        flex-basis:635px;
    }
    .other-items{
        flex-direction:column;
        width:350px;
    }

    .otherItrms .product-wrapper::before{
        background-size:contain;
        min-height:308px;
        height:100%;
        min-width:300px;
   }
   .category .category-wrapper{
        margin:0;
        margin-top:60px;
        padding:0;
        padding-bottom:20px;
        min-width:300px;
   }
    
}
`