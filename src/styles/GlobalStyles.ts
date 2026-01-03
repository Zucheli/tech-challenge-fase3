import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  /* Container padrão da aplicação */
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 16px;
  }

  /* Responsividade básica */
  @media (max-width: 768px) {
    html {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }
  }
`;