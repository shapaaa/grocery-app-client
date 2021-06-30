import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';
const GlobalStyle = createGlobalStyle`
${normalize()}
:root{
font-size:16px;
--orange:#ff8811;
--light-orange:#f89225;
--dark-blue:#330867;
--blue:#744FC6;
--green:#0FFF95;
--success-color:#529E66;
--error-color:#D0454C;
--warning-color:#CAB23F;
/* --formElementBackground: #f4f5f7;
--textFormElementBackground: #4a4b53; */
--text-secondary: #5a5a5a;
--text: #000000;
--disabled: #737581;
--tex-on-disabled: #e1e1e1;
--text-inverted: #ffffff;
}
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
html:focus-within {
  scroll-behavior: smooth;
}
body {
  min-height: 200vh;
  text-rendering: optimizeSpeed;
  font-family: ${primaryFont};
}
img,
picture {
  max-width: 100%;
  display: block;
}
*,
*::before,
*::after{
    box-sizing: border-box;
}
`;

export default GlobalStyle;
