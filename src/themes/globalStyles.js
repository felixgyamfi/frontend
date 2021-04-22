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
        font-family: Montserrat;
        font-size: calc(10px + 1vw);
    }

    h1 {
        font-size: 3.6rem;
        color: #1D2A73;
    }

    h2 {
        font-size: 2.4rem;
        color: #1D2A73;
    }
`;

export default GlobalStyle;
