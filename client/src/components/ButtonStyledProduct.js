import styled from "styled-components";

const ProductButton = styled.button`
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    mix-blend-mode: normal;
    height: 100%;
    width:33.3%;
    border: 0;
`
export const AddButton = styled(ProductButton)`
   opacity: 0.25;
`
export const SubButton = styled(ProductButton)`
   opacity: 0.25;
`
export const NumberButton = styled(ProductButton)`
    opacity:1;
    &:hover{
        opacity:1
    }
`