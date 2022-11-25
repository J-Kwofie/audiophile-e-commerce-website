import styled from "styled-components"

export const FooterSection2Styled = styled.section`
    .line{
        margin-bottom: 40px;
    }
    background-color: ${(props)=>props.theme.bacground1};
    display: flex;
    flex-direction: column;
    justify-content: center;        
    align-items: center;
    padding-bottom: 30px;
    nav{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:30px;
        padding-bottom: 40px;
    }
    nav ul{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    
    }
    p{
        color: ${(props)=>props.theme.textColor};
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        mix-blend-mode: normal;
        opacity: 0.5;
        max-width:327px;
        margin-bottom: 40px;
    }
    .copyright{
        font-weight: 700;       
    }
    ul{
        display: flex;
        gap:15px;
        align-items: center;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (min-width: 766px){
        padding-left: 10%;
        padding-right: 10%;
        align-items: flex-start;
        .line{
            height: 4px;
            width: 104px;
            background: #D87D4A;
        }
        nav{
            align-items: flex-start;
        }
        nav ul{
            flex-direction: row;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 13px;
            line-height: 25px;
            letter-spacing: 2px;
            text-transform: uppercase;

        }    
        p{
            max-width: 100%;
            text-align: left;
        } 
        div{
           width: 100%;
            display: flex;
           flex-direction: row;
           align-items: center;
           justify-content: space-between;
          }    
        div p{
            margin: 0;
        }     
    }
    @media (min-width:1144px){
        nav{
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`