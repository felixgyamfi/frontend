import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: teal;
        font-family: Open-Sans, Monospace, Sans-Serif;
    }

    h1 {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: black;
    }
`;

export default GlobalStyle;
