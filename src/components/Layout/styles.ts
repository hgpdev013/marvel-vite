import styled from "styled-components";

export const Container = styled.div<{ isOpen?: boolean }>`
  height: 100vh;
  width: 100vw;
  overflow: ${({ isOpen }) => (isOpen ? "hidden" : "auto")};
`;
