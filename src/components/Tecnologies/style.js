import styled from "styled-components";

export const Tecno = styled.div`
    box-sizing: border-box;
    padding: 10px;

    width: 100%;
    height: 53px;

    border: none;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--grayBackGround);

    h2{
        font-size: 15px;
    }

    div{
        display: flex;
        width: 20%;
        justify-content: space-between;
        align-items: center;
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

`