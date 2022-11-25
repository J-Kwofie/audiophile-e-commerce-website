import styled from 'styled-components'

export const GalleryStyled  = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    .gallery0 , .gallery1,.gallery2{
        background-size:cover;
        height:179px;
        width: 100%;
        background-repeat: no-repeat;
        background-position:0% 0%;
        border-radius: 10px;
    }
    .gallery0{
        background-image: url(${(props)=>`../.${props.gallery[0].mobile_image_url}`});
    }
    .gallery1{
        background-image: url(${(props)=>`../.${props.gallery[1].mobile_image_url}`});
        
    }
    .gallery2{
        background-image: url(${(props)=>`../.${props.gallery[2].mobile_image_url}`});
        height:368px;

    }
    @media (min-width:766px){
        width:90%;
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-template-rows:auto auto;
        gap:10px;
        align-content:center;
        .gallery0{
            grid-column-start:1;
            grid-column-end:2;
            background-image: url(${(props)=>`../.${props.gallery[0].tablet_image_url}`});
        }
        .gallery1{
            grid-column-start:1;
            grid-column-end:2;  
            background-image: url(${(props)=>`../.${props.gallery[1].tablet_image_url}`});
        }
        .gallery2{
            grid-column-start:2;
            grid-column-end:3;
            grid-row: span 2;
            grid-row-start:1;
            grid-row-end:3;
            background-image: url(${(props)=>`../.${props.gallery[2].tablet_image_url}`});

        }

    }
    @media (min-width: 1144px) {
        grid-template-columns:445px  635px;
        justify-content:center;

    .gallery0 , .gallery1{
        height:280px;
        max-width:445px;
        justify-self:center;
    }
        
        .gallery0{
        background-image: url(${(props)=>`../.${props.gallery[0].desktop_image_url}`});
    }
    .gallery1{
        background-image: url(${(props)=>`../.${props.gallery[1].desktop_image_url}`});
        
    }
    .gallery2{
        background-image: url(${(props)=>`../.${props.gallery[2].desktop_image_url}`});
        background-position:center;
        height:592px;
        max-width:635px;
        justify-self:center;

    }
    }
`