import styled from "styled-components";

export const CheckoutFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap:30px;
    background: #FFFFFF;
    padding-top: 30px;
    padding-bottom: 30px;
   h2{
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding-left: 20px;
        padding-right: 20px;
        color: #000000;
    }
    fieldset{
        border: none;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        gap:30px;
    }
    fieldset h3{
        font-weight: 700;
        font-size: 13px;
        line-height: 25px;
        /* identical to box height, or 192% */

        letter-spacing: 0.928571px;
        text-transform: uppercase;

        color: #D87D4A;
    }
    .Field{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .Field label{
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.214286px;

        color: #000000;
    }
    .label-wrapper{
        display: flex;
        justify-content: space-between;
        
    }
    .label-wrapper .error{
        color:#FF0000;
    }
    input{
        height: 56px;
        border-radius: 8px;
        border: 1px solid #CFCFCF;
        padding-left: 30px;
    }
    input:focus-visible {
     outline: none;
    }
    input:focus{
       border: 1px solid #D87D4A;
       border-radius: 8px;

    }
    .radio-field:hover{
        border: 1px solid #D87D4A;
       border-radius: 8px;
    }
    input[type=radio] {
            accent-color: red;
    }
    .radio-field {
        display: flex ;
        align-items: center;
        gap: 10px;
        border-radius: 8px;
        border: 1px solid #CFCFCF;
        padding-left: 30px;   
     }
    .cash-on-delivery{
        display: flex;
        gap:30px;
        align-items: center;
    }
    .cash-on-delivery p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
    }
    .e-money{
        display: flex;
        flex-direction: column;
        gap:15px;
    }
    .payment_wrapper{
        display: flex;
            flex-direction: column;
            gap:15px;
        }
    
    @media (min-width: 766px) {
        fieldset{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }  
        fieldset h3{
            grid-column-start: 1;
            grid-column-end: -1;
        }
        .address, .payment{
            grid-column-start: 1;
            grid-column-end: -1;
        }
        .payment{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .payment_wrapper{
           
        }
        .e-money{
            grid-column-start: 1;
            grid-column-end: -1; 
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .cash-on-delivery{
            grid-column-start: 1;
            grid-column-end: -1;   
        }
    }
`