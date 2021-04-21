import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        margin: 0;
        padding: 0;
        background: #FFFFFF;
        font-family: Open-Sans, Monospace, Sans-Serif;
        font-size: calc(10px + 1vw);
    }

    h1 {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 3.6em;
        color: #1D2A73;
    }
`;

export default GlobalStyle;
