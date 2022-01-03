import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Outfit, Inter, sans-serif;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: #1c1c1c;
    text-decoration: none;
    transition: 0.2s ease;
  }

  footer a:hover {
    opacity: 0.8;
  }

  h2 {
    margin: 0;
  }

  ::-webkit-scrollbar {
    background: transparent;
    height: 6px;
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50vw;
  }

  ::-webkit-scrollbar-track {  
    margin-top: 40px;
  }
`;

export default GlobalStyle;
