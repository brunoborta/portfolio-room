import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  --purple-light: #8C7FA2;
  --purple: #D4B5E7;
  --navy-blue: #2D3671;
  --green: #82C752;
  --brown: #A28E7F;
  --beige: #DEBD9C;
}

#root {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyle;
