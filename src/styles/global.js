import { createGlobalStyle } from 'styled-components'

     export const GlobalStyle = createGlobalStyle`

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: 0;
        }

        :root{
            --grayBackGround:  #121214;
            --grayBackgroundForm: #212529;
            --grayBtnCadastroSpan: #868E96;
            --pink: #FF577F;
            --grayFont: #f8f9fa;    
            --grayInput: #343b41    
        }

        body{
            background: var(--grayBackGround);
            color: var(--grayFont);

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }

        body, input, button,h1,h2,h3,h4{
            font-family: 'Inter', sans-serif;
        } 

        h1{
            font-weight: 700;
            font-size: 22px;
            color: var(--pink);
        }

        h2{
            font-size: 18px;
            font-weight: 700;
        }

        span{
            font-size: 12px;
            font-weight: 600;
            color: var(--grayBtnCadastroSpan);
        }

        button{
            cursor: pointer;
        }

        a{
            text-decoration: none;
        }

        #root{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        label{
            font-size: 12px;
            font-weight: 600;
        }

`
