import styled from "styled-components";

export const FooterSection1Styled = styled.section`
    width:100%;
    section{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    section::before{
        content:"";
        min-height: 300px;
        height:100%;
        width: 100%;
        background-image: url(${require('../../assets/shared/mobile/image-best-gear.jpg')});
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center ;
   }
   section div{
    font-family: 'Manrope';
    font-style: normal;
    max-width: 327px;

   }
   section div h1{
    margin-top: 30px;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
   }
   h1 span{
    color: #D87D4A;
   }
   section div p{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-top: 40px;
   }
   @media (min-width: 766px){
        section::before{
        background-image: url(${require('../../assets/shared/tablet/image-best-gear.jpg')});
    
        }
        section div {
            max-width: 567px;
        }
        section div h1{
            font-size: 40px;
        }
   }
   @media (min-width: 1144px){
        margin: 100px 10%  100px 10%;
        width:80%;
        section{
            flex-direction: row-reverse;
            justify-content: space-between;
        }
       
        section::before{
            height: 558px;
            width: 50%;
            background-image: url(${require('../../assets/shared/desktop/image-best-gear.jpg')});
        }
        section div{
           max-width:445px;
            align-self: center;
        }
        section div h1{
         line-height: 44px;
         letter-spacing: 1.42857px;
         text-align: left;
        }
        section div p{
            text-align: left;
        }
   }

`