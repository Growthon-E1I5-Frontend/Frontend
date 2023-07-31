import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

    ${reset}

    {
        box-sizing: border-box;

    }

    body {
        width: 100vw;
        margin: 0;
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ol,
    ul,
    li {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: 0;
        background-color: inherit;
    }
`;

export default GlobalStyles;
