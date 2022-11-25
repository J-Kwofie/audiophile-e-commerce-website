import styled from "styled-components";

export const HeaderStyled = styled.header`
    height: 300px;
    background-color: ${(props)=>props.theme.bacground1};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Manrope';
    text-transform: uppercase;
    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        text-align: center;
        letter-spacing: 1.42857px;
        color: #FFFFFF
    }
`