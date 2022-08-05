import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    background: #4B69FD;
    border: 2px solid black;
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box

    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  section {
    width: 100%;
    text-align: center;
    max-width: 900px;
  }

  h2 {
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 36px;
    color: #4B69FD;
  }

  ul li {
    font-size: 18px;
    font-weight: 300;
    margin: 8px 0;
  }
`;
