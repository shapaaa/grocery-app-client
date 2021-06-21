import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
font-size:62.5%;
font-family: 'Open Sans', sans-serif;
--orange:#ff9100;
--black:#413f54;
}
html,body{

margin:0;
padding:0;
}
*{
    box-sizing: border-box;
}
`;

export default GlobalStyle;
