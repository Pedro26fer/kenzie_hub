import styled from 'styled-components'

export const ConteinerLogin = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    align-items: center; 

    width: 28vw;
    min-height: 502px;
    overflow-y: auto;

    margin-top: 20px;



    background-color: var(--grayBackgroundForm);
    border-radius: 4px;
    color: var(--grayFont);

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    div{
        display: flex;
        flex-direction: column;
        gap: 22px;

        margin-bottom: 10px;
        width: 99.8%;
    }

`
export const MainBlock = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

`

