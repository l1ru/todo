import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Rubik', sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: var(--gray400)
  }
  :root {
    --primary: #3E78B2;
    --secondary: #004BA8;
    --gray400: #4A525A;
    --gray600: #24272B;
    --gray800: #07070A;
  }
`