import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *,
  *::before,
  *::after{box-sizing:border-box;}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline; 
  }

  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;
  }

  a{
    text-decoration: none;
    color: black;
  }

  ::-webkit-scrollbar {
  width: 8px;
  background-color: rgba(0,0,0,0);
  border-radius: 100px;
  -webkit-border-radius: 100px;
}
::-webkit-scrollbar:hover {
  background-color: rgba(0, 0, 0, 0.09);
}

::-webkit-scrollbar-thumb:vertical {
  background: rgba(0,0,0,0.5);
  border-radius: 100px;
  -webkit-border-radius: 100px;
}
::-webkit-scrollbar-thumb:vertical:active {
  background: rgba(0,0,0,0.61);
  border-radius: 100px;
  -webkit-border-radius: 100px;
}
`;

export default GlobalStyle;
