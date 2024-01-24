import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; 
    background: ${({ theme }) => theme.background};
  }
  body {
    color: ${({ theme }) => theme.text};
  }
`;

export const Layout = styled.div`
  height: 100vh;
`;
