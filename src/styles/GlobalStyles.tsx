import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    src:
        url('../src/assets/fonts/NotoSansKR-Thin.woff') format('woff'),
        url('../src/assets/fonts/NotoSansKR-Thin.woff2') format('woff2'),
    }

    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src:
        url('../src/assets/fonts/NotoSansKR-Light.woff') format('woff'),
        url('../src/assets/fonts/NotoSansKR-Light.woff2') format('woff2'),
    }

    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src:
        url('../src/assets/fonts/NotoSansKR-Regular.woff') format('woff'),
        url('../src/assets/fonts/NotoSansKR-Regular.woff2') format('woff2'),
    }

    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src:
        url('../src/assets/fonts/NotoSansKR-Medium.woff') format('woff'),
        url('../src/assets/fonts/NotoSansKR-Medium.woff2') format('woff2'),
    }

    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src:
        url('../src/assets/fonts/NotoSansKR-Bold.woff') format('woff'),
        url('../src/assets/fonts/NotoSansKR-Bold.woff2') format('woff2'),
    }

    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    src:
        url('../src/assets/fonts/NotoSansKR-Black.woff') format('woff'),
        url('../src/assets/fonts/NotoSansKR-Black.woff2') format('woff2'),
    }

    ${reset}

    * {
        font-family: 'Noto Sans KR', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
    }

    body {
        margin: 0 auto;
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
