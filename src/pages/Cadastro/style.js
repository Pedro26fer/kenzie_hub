import styled from "styled-components";

export const Conteiner = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    align-items: center; 

    width: 28vw;
    min-height: 502px;
    overflow-y: auto;



    background-color: var(--grayBackgroundForm);
    border-radius: 4px;
    color: var(--grayFont);

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    div{
        display: flex;
        flex-direction: column;
        gap: 22px;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    select{
        cursor: pointer;
        background-color: var(--grayInput);

        color: #fff;
        font-size: 17px;
        font-weight: 400;

        border: 1.2182px solid var(--grayInput);
        border-radius: 4px;

        width: 90% ;
        height: 48px;
        padding: 10px;
    }

`

export const Form = styled.form`

    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 90%;
    gap: 20px;

    background-color: var(--grayBackgroundForm);

`
export const ErrorMessage = styled.span`

     color: #bf1f00;
    
`







