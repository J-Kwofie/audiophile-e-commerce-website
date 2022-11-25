import styled from "styled-components";
export const CategorySectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    .category-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F1F1F1;
        border-radius: 8px;
        padding-bottom: 30px;
        margin: 10% 5%;
    }
    .category-wrapper img{
       height: 144px;
       width: 143px;
       margin-top: -50px;
    }
    
    .category-wrapper div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 57px;
        height: 18px;
        margin-top: 20px;
    }
    .category-wrapper div img{
        flex-basis: 5px;
        height: 10px;
        margin: 0;
    }
    
    .category-wrapper div span{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;

        letter-spacing: 1px;
        text-transform: uppercase;

        color: #000000;

        mix-blend-mode: normal;
        opacity: 0.5;
    }
    @media (min-width: 766px) {
        flex-direction: row;
        justify-content: center;
        .category-wrapper{
            padding-left: 5%;
            padding-right: 5%;
            margin-left: 2.5%;
            margin-right: 2.5%;
        }
    }
`