import { createGlobalStyle } from 'styled-components';
import thin from '../assets/fonts/NotoSans-Thin.woff2';
import light from '../assets/fonts/NotoSans-Light.woff2';
import regular from '../assets/fonts/NotoSans-Regular.woff2';
import medium from '../assets/fonts/NotoSans-Medium.woff2';
import bold from '../assets/fonts/NotoSans-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Noto Sans KR';
  src: url(${thin}) format('woff2');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Noto Sans KR';
  src: url(${light}) format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Noto Sans KR';
  src: url(${regular}) format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Noto Sans KR';
  src: url(${medium}) format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Noto Sans KR';
  src: url(${bold}) format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

* {
  font-family:
    'Noto Sans KR',
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  box-sizing: border-box;
}

* ::-webkit-scrollbar {
  width: 0;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
a {
  text-decoration: none;
  color: inherit;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  outline: none;
  border: none;
  background-color: inherit;
  cursor: pointer;
}
`;

export default GlobalStyle;
