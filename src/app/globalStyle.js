import { createGlobalStyle } from 'styled-components';
import { colors } from 'root/tailwind';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'system-ui', sans-serif;
    font-size: 2.2rem;
    margin: 0;
    background-color: ${colors.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, label, a, span {
    line-height: 1.5em;
    font-size: 1.5rem;
    margin: unset;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  button {
    outline: none;
    cursor: pointer;
    border: none;
  }

`;

export default GlobalStyle;
