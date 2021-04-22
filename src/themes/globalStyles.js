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
        font-size: calc(.6rem + 1vw);
    }

    h1 {
        font-size: 3.6em;
        color: ${(props) => props.theme.midnightBlue};
    }

    h2 {
        font-size: 2.4em;
        color: ${(props) => props.theme.midnightBlue};
    }
`;

export default GlobalStyle;
