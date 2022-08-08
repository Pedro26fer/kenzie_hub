import styled from 'styled-components'

export const HeaderHome = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50vw;

    width: 100vw;
    height: 12vh;

    color: var(--pink);
    font-weight: 700;
    background: transparent;

    border-bottom: 0.1px solid var(--grayInput);

    button{
        padding: 10px 16.2426px;
        font-size: 12px;
        font-weight: 600;
        color: var(--grayFont);
        background-color: var(--grayBackgroundForm);
        border-radius: 4px;
        border: none;
    }

    div{
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const Welcome = styled.div`
    height: 18vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 0.1px solid var(--grayInput);

    div{
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1{
        color: #fff;
    }

`

export const ListTech = styled.div`

    display: flex;
    width: 60vw;
    justify-content: space-between;
    margin-top: 20px;


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

export const Dashboard = styled.div`

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    width: 60vw;
    height: 55vh;
    overflow-y: auto;
    margin-top: 20px;
    




    background-color: var(--grayBackgroundForm);
    border-radius: 4px;

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
`
export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 25px;


`