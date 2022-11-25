import styled from "styled-components";

export const StyledButton = styled.button`
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
    &:hover{
      background: #FBAF85;
    }
`
export const ProductButtonStyled = styled(StyledButton)`
  background-color: #000000;
`