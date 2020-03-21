import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *,
  *::before,
  *::after{box-sizing:border-box;}

  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;
  }
`;

export default GlobalStyle;
