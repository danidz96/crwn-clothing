import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *,
  *::before,
  *::after{box-sizing:border-box;}

  body {
    font-family: 'Open Sans Condensed';
  }
`;

export default GlobalStyle;
