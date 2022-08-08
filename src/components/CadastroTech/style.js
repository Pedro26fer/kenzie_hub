import styled from "styled-components";

export const BackGroundModal = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    background-color: rgba(0,0,0,.9);

`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


 
    width: 369px;
    height: 342px;



    background-color: var(--grayBackGroundForm);


    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
        gap: 10px;

        width: 100%;
        height: 15%;

        background-color: var(--grayInput);
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        border:none;
        h2{
            font-size: 16px;
        }

        button{
            padding: 10px 16.2426px;
            font-size: 12px;
            font-weight: 600;
            color: var(--grayFont);
            background-color: var(--grayBackgroundForm);
            border-radius: 4px;
            border: none;
        }
    }


`
export const FormTechs = styled.form`
    box-sizing: border-box;

    padding-top: 25px;
    padding-left: 35px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    height: 100%;
    gap: 20px;

    background-color: var(--grayBackgroundForm);

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    div{
        width: 100%;

    }

    
    input{
        background-color: var(--grayInput);

        color: #fff;
        font-size: 17px;
        font-weight: 400;

        border: 1.2182px solid #fff;
        border-radius: 4px;

        width: 90% ;
        height: 38px;
        padding: 10px;
    }

    select{
        background-color: var(--grayInput);
        color: #fff;
        font-size: 17px;
        font-weight: 400;

        border: 1.2182px solid #fff;
        border-radius: 4px;

        width: 90% ;
        height: 38px;
        padding: 10px;
        }

`