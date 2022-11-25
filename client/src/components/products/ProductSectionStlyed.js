import styled from "styled-components";

export const ProductSectionStyled = styled.section`
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 100px;
    display: flex;
    .product-wrapper::before{
        content: "";
        background-image: url(${(props)=>`../.${props.productImage[0]}`});
        background-size:contain;
        background-repeat:no-repeat;
        background-position:center;
        min-height:352px;
        height:100%;
        width: 100%;
        display:flex;

    }
    .product-wrapper{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .product-wrapper div{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:35px;
        margin-top : 35px;
        font-family: 'Manrope';
    }
    .product-wrapper div h2{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #D87D4A;

    }
    .product-wrapper div h1{
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #000000;
    }
    .product-wrapper div p{
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
        max-width:100%;
    }
    @media (min-width: 766px) {
        .product-wrapper::before{
            background-image: url(${(props)=>`../.${props.productImage[1]}`});
            height:352px;
        }
        .product-wrapper div{
            max-width:572px;
            align-items:center;
            margin:auto;
        }
    }
    @media (min-width: 1144px) {
        .product-wrapper::before{
            background-image: url(${(props)=>`../.${props.productImage[2]}`});
            background-position:0;
            background-size:contain;
            height:352px;
            width:50%;
            
        }
        .product-wrapper{
            
            flex-direction:${(props)=>
               (props.index+1)%2 === 1 ? 'row' : 'row-reverse'
            };
            justify-content: center;
            gap:10%;
        
        }
        .product-wrapper div{
            align-items:flex-start;
            justify-self: flex-start;
            margin:0;
        }
        .product-wrapper div h2, .product-wrapper div h1, .product-wrapper div p{
            text-align:left;
        }
        
    }
`