import { createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: ${(props)=>props.theme.fontfamily};
  }
  a{
    text-decoration: none;
    color: ${(props)=>props.theme.textColor};
  };
  a:visited{
    color: ${(props)=>props.theme.textColor};
  };
  li {
    list-style: none;
  };
   .headerWrapper{
    background:${(props)=>props.theme.bacground1};
    
  } ;
  @media (min-width: 766px) {
    .headerWrapper{
        padding-left: 3.5%;
        padding-right: 3.5%;
    }
   
  }
  @media (min-width: 1144px) {
    .headerWrapper{
        padding-left: 4%;
        padding-right: 4%;
    };
   
  }
`