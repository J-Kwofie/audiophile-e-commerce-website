import styled from "styled-components";
import headphonemobile from '../../assets/home/mobile/image-header1.jpg'
import headphonedesktop from '../../assets/home/tablet/image-header1.jpg'
export const MainSectionStyled = styled.section`
    background:#191919;
    position: relative;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
    div .heading {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 10px;
      text-transform: uppercase;
      color: #FFFFFF;
      opacity: 0.5;
  }
  div .product{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #FFFFFF;
    z-index: 2;
  }
  div .product-message {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */
    width: 328px;
    text-align: center;
    opacity: 0.5;
    z-index: 2;

    color: #FFFFFF;

    mix-blend-mode: normal;
    opacity: 0.75;



  }
  div .see-product {
    padding: 6px;
    background: #D87D4A;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 0;
    color: #FFFFFF;
    border-radius: 3px;
    width: 168px ;
    height: 48px;
    z-index: 2;
}
    &::after{
        content: "";
      background-image: url(${headphonemobile});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      opacity: 0.5;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    @media (min-width: 768px) {
      &::after{
        content: "";
        background-image: url(${headphonedesktop});
    }
  }
  @media (min-width: 1144px){
    position: unset;
    flex-direction: row;
    justify-content: space-around;
    div{
      align-items: flex-start;
    }
    div .heading{
      text-align: left;
    }
    div .product{
      align-items: flex-start;
    }
    div .product-message{
      text-align: left;
    }
    &::after{
      position: unset;
      background-image: url(${headphonedesktop});
      background-size: contain;
      width: 608.8px;
      height: 788px;
      opacity: 1;
    }
  }
`