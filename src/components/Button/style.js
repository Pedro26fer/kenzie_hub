import styled from "styled-components";

export const Button = styled.button`

    color: ${ (props) => props.pinkButton? "#fff" : "#f8f9fa"};
    background: ${(props) => props.pinkButton? "#FF577F" : "#868E96"};
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    

    width: 90%;
    height: 48px;

    margin-bottom: 15px;

    :hover{
        border: ${(props) => props.pinkButton? "2px solid #fff" : "2px solid #FF577F"};
    }

`