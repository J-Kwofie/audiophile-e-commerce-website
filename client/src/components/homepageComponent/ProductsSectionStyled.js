import styled from "styled-components";
import cir from '../../assets/home/desktop/pattern-circles.svg'
import speakerMobile from '../../assets/home/desktop/image-speaker-zx9.png'
export const ProductSectionStyled = styled.section`
    
    margin-left: 5%;
    margin-right: 5%;
    .section1{
        background: #D87D4A;
        border-radius: 8px;
        width: 100%;
    }
     .section1-wrapper{
        width: 100%;
        height: 600px;
        background-image: url(${cir});
        background-size: cover;
        background-position:50% -160px;
        background-repeat: no-repeat;
       
    }
    .section-container{
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 65px;
    }
    .section-container::before {
        display: flex;
        width: 100%;
        height: 207px;
        content: '';
        background-image: url(${speakerMobile});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .section-container .product{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    .product h1{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
        text-align: center;
        letter-spacing: 1.28571px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .product p{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.75;
        width: 280px;
    };
    .product2{
        height: 320px;
        width: 100%;
        background-image: url(${require('../../assets/home/mobile/image-speaker-zx7.jpg')});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        gap:30px;
        border-radius: 8px;
        margin-top: 50px;
        justify-content: center;
    }
    
    .product2 h1{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #000000;
        justify-content: flex-start;
        align-items: center;
        margin-left: 5%;
    }

    .product2 button{
        background-color: transparent;
        color: #000000;
        border: 1px solid #000;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 1px;
        justify-content: flex-end;
        margin-left: 5%;
    }

    /* section 3 */
    .product3{
        height: 400px;
        width: 100%;
        display: flex;
        margin-top: 50px;
    }
    .product3-wrapper::before{
        display: flex;
        height: 300px;
        width: 100%;
        content: "";
        background-image: url(${require('../../assets/home/mobile/image-earphones-yx1.jpg')});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
    }
    .product3-wrapper{
        height: 400px;
        width: 100%;  
        border-radius: 8px;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
    }
    .product3-wrapper div{
        height: 200px;
        display: flex;
        background: #F1F1F1;
        flex-direction: column;
        justify-content: center;
        padding-left: 7%;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 30px;
        gap:30px;
        border-radius: 8px;
    }
    .product3-wrapper div h1{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #000000;
    }
    .product3-wrapper div button{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 1px;
        text-transform: uppercase;
        background-color: transparent;
        border: 1px solid #000;
        color: #000000;
    }

    @media (min-width: 766px){
        .section1-wrapper{
            background-position:50% -180px;       
         }  
         .product2{
            background-image: url(${require('../../assets/home/tablet/image-speaker-zx7.jpg')});

         };

         /*section 3*/
         .product3{
            height: 320px;
         }
         .product3-wrapper::before{
            background-image: url(${require('../../assets/home/tablet/image-earphones-yx1.jpg')});
            background-size: cover;
            width:50%;
            height:100%;
         }
         .product3-wrapper {
            flex-direction:row;
            height: 320px;
         }
         .product3-wrapper div{
            width: 50%;
            height: 100%;
            margin: 0;
            padding: 0;
            margin-left: 10px;
         }
         .product3-wrapper div h1, .product3-wrapper div button{
            margin-left: 10%;
        }
       
    };
    
    @media (min-width: 996px){
        .section1-wrapper{
            background-position:50% -270px;       
         }
    }
    @media (min-width: 1144px){
        margin-left: 10%;
        margin-right: 10%;
        .section1-wrapper{
            background-size: 70%;
            background-position: 20% 50%;
        }
        .section-container{
            flex-direction: row;
            gap:20px;
        }  
                                                                 
        .section-container::before {
            width:50%;
            height: 407px;
        }
        .product{
            justify-content: flex-start;
            align-items: flex-start;
            text-align: left;
            gap:30px;
        }
        .product h1{
            font-weight: 700;
            font-size: 56px;
            line-height: 58px;
            letter-spacing: 2px;
            text-align: left;
            margin: 0;
            padding: 0;
        }
        .product p{
            text-align: left;
            font-weight: 500;
            font-size: 15px;
            line-height: 25px;
            mix-blend-mode: normal;
            opacity: 0.75;
        }
        .product div{
            margin: 0;
            padding: 0;
            align-self: flex-start;
        }
        .product button{
            align-self: flex-start;
        }
        .product2{
        height: 320px;
        width: 100%;
        margin-top: 30px;
        border-radius: 8px;
        background-image: url(${require('../../assets/home/desktop/image-speaker-zx7.jpg')});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap:30px;

    };
    
    .product2 h1{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #000000;
        justify-content: flex-start;
        align-items: center;
        margin-left: 5%;
    }

    .product2 button{
        background-color: transparent;
        color: #000000;
        border: 2px solid #000;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 1px;
        justify-content: flex-end;
        margin-left: 5%;

    }
    /*section 3*/
    
         .product3-wrapper::before{
            background-image: url(${require('../../assets/home/desktop/image-earphones-yx1.jpg')});
            
         }
    }
` 